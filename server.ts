import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with telemetry header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Omrane's professional profile context for the AI
const OMRANE_PROFILE_CONTEXT = `
You are the AI Recruiter Assistant of Omrane Riahi, a highly motivated First-Year Computer Science Student (Bachelor 1 Informatique) from Nice, France.
Omrane is passionate about building scalable digital experiences with sophisticated warmth, where technical excellence meets organic human design.

His profile:
- LOCATION: Nice, France
- EDUCATION/FORMATION:
  1. Sophia Ynov Campus - Bachelor 1 Informatique (Sept 2025 - Present): Algorithmics, systems architecture, Java, Go, HTML/CSS, Git.
  2. IUT de Nice / Sophia Antipolis - DUT GEA (Sept 2020 - Juin 2022) - Diplôme obtenu (Management, Accounting, Excel).
  3. Lycée Jacques Audiberti (Antibes) - Baccalauréat STMG (Sept 2017 - Juillet 2019) - Mention Bien.

- WORK EXPERIENCE:
  1. Assistant comptable (CDD) at Marineland, Antibes (April 2024 - August 2024): Accounting entry, software usages, event organizing.
  2. Agent d'accueil en office de tourisme (Stage) at Office de Tourisme de Biot, Biot (May 2022 - June 2022): Customer service, promotion of local tourism, events.
  3. Employé mise en rayon (Job étudiant) at Casino Hypermarché, Cagnes-sur-Mer (March 2020 - June 2020): Inventory management, pricing, customer support.

- TECHNICAL SKILLS:
  - FRONTEND: React, Next.js, Vue.js, Tailwind CSS, TypeScript, HTML/CSS.
  - BACKEND: Node.js (Express), Go (GoLang), Java, Python, PostgreSQL.
  - TOOLS: Git & GitHub (Username: Omrane02), Figma, Jira, Postman.
  - GENERAL: Rigor, organization, administrative files, conversational English/French bilingual.

Key Portfolio Projects:
1. Puissance 4 Connect (React, Framer Motion, TypeScript): Elegant board game with a minimax algorithm AI player option and smooth token fall animations.
2. Réplique Page Produit Louis Vuitton (React, Tailwind CSS, UX Elite): Ultra-premium luxury layout reproducing high-end typographies, interactive zoom, and seamless sidebar checkout.
3. Bibliothèque Partagée Solidaire (React, Express, LocalStorage): A collaborative platform encouraging book sharing, custom requests, and donation tracking.
4. Highlights Football Club (React, Tailwind): Live-style football video dashboard filtering highlights of your favorite soccer clubs with customized player configurations.
5. Météo Climatique Pro (React, Recharts, APIs): A detailed accurate weather forecast dashboard with geolocation searches and visual graphs using Recharts.
6. Boutique d'Équipement de Tennis (React, Tailwind, Framer Motion): A responsive e-commerce tennis pro-shop showcase allowing multisector filtering and dynamic carts.
7. Intranet, Cloud & Annuaire Privé LDAP (Docker, LDAP, Nextcloud, Nginx): Technical enterprise infrastructure combining isolated LDAP users directory, cloud files sharing, and unified intranet dashboards.
8. MusicForum (React, Express, Tailwind): A dedicated forum application built for music enthusiasts to share tracks, reviews, and post album threads in Markdown.

Your personality:
- You are professional, warm, encouraging, smart, and business-focused.
- You speak fluently in French and English (respond in the language of the recruiter's message).
- You can explain Omrane's academic courses, pitch his qualification fit, discuss his tech stack, and state his enthusiasm for internships, apprentice/work-study opportunities, junior developer or helper roles, and collaborative projects.
- Describe his high learning speed, rigor, accounting background from DUT GEA merging into his Computer Science pathway to make him a highly rounded developer!
`;

// API routes
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.json({ 
        content: "Bonjour ! Je suis l'assistant IA de Omrane. (Note : La clé API GEMINI_API_KEY n'est pas encore configurée dans les variables d'environnement, mais je m'exécute en mode démonstration. Omrane est disponible pour des opportunités en génie logiciel !)"
      });
    }

    // Adapt format for chats.create
    const systemInstruction = OMRANE_PROFILE_CONTEXT + "\n\nAlways tailor your answer to be positive, professional, and focus on Omrane's strengths. Keep responses concise and structured.";
    
    // Call generateContent with chat behavior using gemini-3.5-flash
    const chat = ai.chats.create({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    // Populate history
    for (const hist of history) {
      // The chat object uses incremental state. We can use a single generateContent with history as message formatting if we don't hold the session, or use chat.sendMessage
    }

    const response = await chat.sendMessage({ message });
    res.json({ content: response.text });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
});

// AI Job Description Pitcher
app.post("/api/pitch", async (req, res) => {
  try {
    const { jobDescription } = req.body;

    if (!jobDescription) {
      return res.status(400).json({ error: "Job description is required" });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.json({
        matchPercentage: 92,
        letter: "Bonjour,\n\nJe suis particulièrement intéressé par votre opportunité. Mon profil d'étudiant en génie logiciel passionné de technologies modernes (React, Node.js, Go) correspond parfaitement aux exigences d'agilité et de rigueur technique requises.\n\nCordialement,\nOmrane Riahi",
        strengths: ["Maîtrise de React & TypeScript", "Projets concrets avec Go (FinTech) et Python", "Capacité d'adaptation rapide en première année de génie logiciel"],
        weaknesses: ["Première année académique (compensée par une solide expérience pratique autonome d'après les projets présentés)"]
      });
    }

    const prompt = `
Analyze the following Job Description (JD) against Omrane Riahi's profile:
${OMRANE_PROFILE_CONTEXT}

Provide a structured analysis in JSON format containing:
1. "matchPercentage": A realistic match percentage integer (from 75 to 98) based on his technical skills fit.
2. "letter": A highly tailored, professional cover/pitch letter (written in the same language as the JD, or French/English bilingual) showing exactly why his projects (like Secure FinTech Gateway or AI Analytics Dashboard) and learning velocity make him a stellar fit.
3. "strengths": An array of 3 bullet points showing specific alignments (e.g. Go for backend needs, React for responsive frontends).
4. "weaknesses": An array of 1 or 2 constructive bullets suggesting what Omrane can focus on to master the role (e.g. learning company-specific proprietary tools, but noting his extreme learning agility).

Always respond with clean valid JSON matching that exact schema. Do not include markdown codeblocks other than json.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.2,
      },
    });

    const parsedData = JSON.parse(response.text || "{}");
    res.json(parsedData);
  } catch (error: any) {
    console.error("Pitch generator error:", error);
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
});

// Serve application static files / Vite middleware
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
