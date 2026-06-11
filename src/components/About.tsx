import { useState } from "react";
import { motion } from "motion/react";
import { Download, FileUser, X, ChevronRight, GraduationCap, Award } from "lucide-react";

export default function About() {
  const [showCvModal, setShowCvModal] = useState(false);

  // Hardcoded tech badges in the image
  const badges = ["Java", "Node.js", "Go", "Git", "HTML/CSS"];

  return (
    <section id="about" className="py-24 bg-warm-lowest border-t border-b border-warm-outline-variant/20 scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left: Circled Portrait with decorative backgrounds */}
          <div className="col-span-1 md:col-span-5 flex justify-center">
            <div className="relative">
              {/* Retro decorative rings in mockup */}
              <div className="absolute -inset-4 rounded-full border border-dashed border-warm-outline animate-spin-slow opacity-60" />
              <div className="absolute -inset-2 rounded-full border-2 border-warm-tint/30" />
              <div className="absolute -inset-px rounded-full bg-gradient-to-tr from-warm-primary to-warm-tint opacity-10 blur-xl" />
              
              {/* Real portrait photo */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-warm-primary relative shadow-xl">
                <img
                  src="/src/assets/images/profile_omrane_user_1781165266233-1.png"
                  alt="Omrane Riahi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlapping badge */}
              <div className="absolute -bottom-2 -right-2 bg-warm-primary text-white p-3.5 rounded-full shadow-lg border border-warm-outline-variant/30">
                <GraduationCap className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Right: Technical Pitch, Badges, CV download */}
          <div className="col-span-1 md:col-span-7 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-warm-dark">
              About Me
            </h2>
            
            <p className="mt-6 text-base sm:text-lg text-warm-variant font-sans leading-relaxed">
              First-year Computer Science student with a passion for clean code and creative problem-solving. I'm at the beginning of my journey, but every project is a step forward — eager to learn, build, and collaborate.
            </p>

            {/* Badges */}
            <div className="mt-8">
              <span className="text-xs font-bold uppercase tracking-wider text-warm-primary block mb-3">Core Stack</span>
              <div className="flex flex-wrap gap-2">
                {badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 rounded-full text-xs font-semibold bg-warm-container text-warm-primary border border-warm-outline-variant/30 transition-transform hover:-translate-y-0.5"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions in mockup: play or simple chevron, and CV download */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  const element = document.getElementById("projects");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-10 h-10 rounded-full bg-warm-primary flex items-center justify-center text-white hover:opacity-90 transition-opacity hover:scale-105 cursor-pointer shadow-sm"
                aria-label="View Projects"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => setShowCvModal(true)}
                className="px-6 py-3 bg-warm-primary hover:bg-warm-primary/95 text-white font-semibold rounded-xl text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download CV / Resume
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* CV Viewer Modal */}
      {showCvModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-warm-dark/45 backdrop-blur-xs">
          <div className="relative w-full max-w-4xl bg-warm-bg rounded-2xl border border-warm-outline-variant/50 shadow-2xl overflow-hidden animate-zoomIn flex flex-col max-h-[90vh]">
            
            {/* Header */}
            <div className="p-6 bg-warm-container border-b border-warm-outline-variant/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileUser className="w-5 h-5 text-warm-primary" />
                <h3 className="text-xl font-bold font-display text-warm-dark">Curriculum Vitae — Omrane Riahi</h3>
              </div>
              <button
                onClick={() => setShowCvModal(false)}
                className="p-2 text-warm-variant hover:text-warm-primary hover:bg-warm-bg rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-8 overflow-y-auto flex-grow prose font-sans text-warm-dark max-w-none">
              
              <div className="flex flex-col sm:flex-row justify-between border-b border-warm-outline-variant/30 pb-6 gap-4">
                <div>
                  <h4 className="text-2xl font-bold font-display text-warm-primary mb-1">OMRANE RIAHI</h4>
                  <p className="text-sm font-semibold text-warm-variant">First-Year Computer Science Student (B1 Info)</p>
                </div>
                <div className="text-sm text-warm-variant sm:text-right space-y-1">
                  <p>📧 omraneriahi@hotmail.com</p>
                  <p>📍 Nice, France</p>
                  <p>📞 0629505932</p>
                  <p>🌐 github.com/Omrane02</p>
                </div>
              </div>

              {/* Education section */}
              <div className="my-6">
                <h5 className="text-lg font-bold font-display text-warm-primary border-b border-warm-outline-variant/20 pb-1 mb-3 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" /> Formation / Académie
                </h5>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-warm-dark">
                      <span>Sophia Ynov Campus — Bachelor 1 Informatique</span>
                      <span className="text-warm-primary">Septembre 2025 - Présent</span>
                    </div>
                    <p className="text-xs text-warm-variant mt-1">Apprentissage des fondamentaux de l'informatique, de l'algorithmique et du génie logiciel. Projets pratiques en Java, HTML/CSS, Go.</p>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-warm-dark">
                      <span>DUT GEA — IUT de Nice / Sophia Antipolis (Nice)</span>
                      <span className="text-warm-primary">Septembre 2020 - Juin 2022</span>
                    </div>
                    <p className="text-xs text-warm-variant mt-1">Diplôme obtenu. Gestion des entreprises et des administrations, comptabilité financière, fiscalité et logiciels spécialisés.</p>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-warm-dark">
                      <span>Baccalauréat STMG — Lycée Jacques Audiberti (Antibes)</span>
                      <span className="text-warm-primary">Septembre 2017 - Juillet 2019</span>
                    </div>
                    <p className="text-xs text-warm-variant mt-1">Obtenu avec Mention Bien. Sciences et technologies du management, économie, droit et gestion.</p>
                  </div>
                </div>
              </div>

              {/* Experience section */}
              <div className="my-6">
                <h5 className="text-lg font-bold font-display text-warm-primary border-b border-warm-outline-variant/20 pb-1 mb-3 flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> Expériences Professionnelles
                </h5>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-warm-dark">
                      <span>Assistant comptable (CDD) — Marineland</span>
                      <span className="text-warm-primary">Avril 2024 - Août 2024</span>
                    </div>
                    <p className="text-xs text-warm-variant mt-1">Travail en tant qu'assistant comptable, enregistrement d'opérations et utilisation de logiciels comptables, ainsi que la participation à d'autres tâches d'organisation et d'événements.</p>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-warm-dark">
                      <span>Agent d'accueil en office de tourisme — Office de Tourisme de Biot (Stage)</span>
                      <span className="text-warm-primary">Mai 2022 - Juin 2022</span>
                    </div>
                    <p className="text-xs text-warm-variant mt-1">Stage de 2 mois : Accueil physique et téléphonique, information et promotion touristique de Biot, organisation d'événements locaux et travail partenarial avec les entreprises.</p>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-warm-dark">
                      <span>Employé mise en rayon — Casino Hypermarché (Job étudiant)</span>
                      <span className="text-warm-primary">Mars 2020 - Juin 2020</span>
                    </div>
                    <p className="text-xs text-warm-variant mt-1">Cagnes-sur-Mer : Service client et assistance générale, mise en rayon des produits, étiquetage, gestion et contrôle des stocks de produits.</p>
                  </div>
                </div>
              </div>

              {/* Key Skills */}
              <div className="my-6">
                <h5 className="text-lg font-bold font-display text-warm-primary border-b border-warm-outline-variant/20 pb-1 mb-3">Compétences & Langues</h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
                  <div>
                    <p className="font-semibold text-warm-dark mb-1 font-display uppercase tracking-wider text-[11px] text-warm-primary">Compétences Professionnelles</p>
                    <ul className="list-disc pl-4 text-warm-variant space-y-1">
                      <li>Rigueur & Sens de l'organisation</li>
                      <li>Gestion de dossiers & Aisance relationnelle</li>
                      <li>Saisie d'opérations & Logiciels comptables</li>
                      <li>Excel & Pack Office complet</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-warm-dark mb-1 font-display uppercase tracking-wider text-[11px] text-warm-primary">Langues</p>
                    <ul className="list-disc pl-4 text-warm-variant space-y-1">
                      <li><strong>Français :</strong> Maternelle</li>
                      <li><strong>Anglais :</strong> Bilingue</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-warm-dark mb-1 font-display uppercase tracking-wider text-[11px] text-warm-primary">Centres d'intérêt</p>
                    <ul className="list-disc pl-4 text-warm-variant space-y-1">
                      <li>Passionné pour le football</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="p-6 bg-warm-container border-t border-warm-outline-variant/30 flex justify-between items-center">
              <span className="text-xs text-warm-variant">© 2026 Omrane Riahi. Built with Sophisticated Warmth.</span>
              <button
                onClick={() => {
                  window.print();
                }}
                className="px-4 py-2 bg-warm-primary hover:bg-warm-primary/95 text-white font-semibold rounded-lg text-xs transition-opacity cursor-pointer"
              >
                Print / Save PDF
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
