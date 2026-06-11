import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { OMRANE_PROJECTS } from "../data";
import { Project } from "../types";
import { Github, ExternalLink, X, Code, Terminal, PlayCircle } from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "web" | "infra">("all");
  const [activeProjectDetail, setActiveProjectDetail] = useState<Project | null>(null);
  const [isSandboxPlaying, setIsSandboxPlaying] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  // Filter projects by category
  const filteredProjects = selectedCategory === "all"
    ? OMRANE_PROJECTS
    : OMRANE_PROJECTS.filter(p => p.category === selectedCategory);

  const categories: { label: string; value: "all" | "web" | "infra" }[] = [
    { label: "All", value: "all" },
    { label: "Web", value: "web" },
    { label: "Infra", value: "infra" }
  ];

  // Helper to trigger interactive sandbox terminal logs
  const startProjectSandbox = (project: Project) => {
    setIsSandboxPlaying(true);
    setTerminalLogs([
      `⚡ [System]: Starting sandbox engine for ${project.title}...`,
      `📦 [Package]: Mounting dependencies for ${project.category.toUpperCase()} environment`,
      `🛡️ [Config]: Initializing environment secrets in sandbox container...`,
      `🚀 [Service]: Booting main service endpoint successfully on port 8080.`,
      `ℹ️ [Activity]: Listening for mock server ingress requests...`
    ]);

    const additionalLogs = [
      "🔄 [Database]: Connection pool established to PostgreSQL schema successfully.",
      "🟢 [Health]: Healthcheck verified standard 'OK' status.",
      "⚠️ [Sec]: Encryption layer mounted; fully compliant payload structure verified.",
      "✅ [Ready]: Complete environment active. Interact using options below!"
    ];

    additionalLogs.forEach((log, idx) => {
      setTimeout(() => {
        setTerminalLogs(prev => [...prev, log]);
      }, (idx + 1) * 800);
    });
  };

  return (
    <section id="projects" className="py-24 bg-warm-bg scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-warm-dark">
              Featured Projects
            </h2>
            <p className="mt-2 text-base text-warm-variant">
              A selection of my recent engineering work.
            </p>
          </div>

          {/* Filter Navigation pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all uppercase cursor-pointer ${
                  selectedCategory === cat.value
                    ? "bg-warm-primary text-white shadow-md shadow-warm-primary/10"
                    : "bg-warm-container/60 text-warm-variant hover:text-warm-primary hover:bg-warm-container border border-warm-outline-variant/20"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Framer Motion AnimatePresence */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-warm-lowest border border-warm-outline-variant/30 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-warm-container/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category overlay */}
                  <div className="absolute top-4 right-4 bg-warm-primary/95 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-sm">
                    {project.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  
                  {/* Category Tag */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span
                      className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm bg-warm-container text-warm-primary border border-warm-outline-variant/20 font-mono"
                    >
                      {project.category === "web" ? "Web Project" : "Infra Project"}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold font-display text-warm-dark group-hover:text-warm-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-warm-variant leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Spacer to push buttons down */}
                  <div className="flex-grow mt-6" />

                  {/* Actions buttons */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <button
                      onClick={() => {
                        setActiveProjectDetail(project);
                      }}
                      className="px-4 py-2.5 rounded-xl border border-warm-outline-variant/50 text-warm-dark hover:bg-warm-container/30 hover:border-warm-outline text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                    >
                      Details
                    </button>
                    
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-warm-primary hover:bg-warm-primary/95 text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-sm hover:shadow transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state if filtered results are null */}
        {filteredProjects.length === 0 && (
          <div className="mt-12 text-center py-16 bg-warm-lowest rounded-2xl border border-dashed border-warm-outline-variant/55 max-w-lg mx-auto">
            <p className="text-warm-variant">Aucun projet dans cette catégorie pour le moment !</p>
            <button
              onClick={() => setSelectedCategory("all")}
              className="mt-4 px-4 py-2 bg-warm-primary text-white text-sm font-semibold rounded-md hover:bg-opacity-90 cursor-pointer"
            >
              Voir tous les projets
            </button>
          </div>
        )}

      </div>

      {/* Project details / Repository preview modal */}
      {activeProjectDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-warm-dark/45 backdrop-blur-xs">
          <div className="bg-warm-bg rounded-2xl border border-warm-outline-variant/60 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-zoomIn">
            
            {/* Modal Header */}
            <div className="p-6 bg-warm-container border-b border-warm-outline-variant/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-warm-primary bg-warm-bg px-2.5 py-1 border border-warm-outline-variant/20 rounded-md">
                  Project Details
                </span>
                <h3 className="text-2xl font-bold font-display text-warm-dark mt-2">
                  {activeProjectDetail.title}
                </h3>
              </div>
              <button
                onClick={() => {
                  setActiveProjectDetail(null);
                }}
                className="p-2 text-warm-variant hover:text-warm-primary hover:bg-warm-bg rounded-xl transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-grow grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Left Column: Project spec details */}
              <div className="col-span-1 md:col-span-6 space-y-4">
                <div className="aspect-video relative rounded-lg overflow-hidden border border-warm-outline-variant/35 bg-warm-container/30">
                  <img
                    src={activeProjectDetail.image}
                    alt={activeProjectDetail.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-warm-primary mb-2">Technical Description</h4>
                  <p className="text-sm text-warm-variant leading-relaxed">
                    {activeProjectDetail.details}
                  </p>
                </div>
              </div>

              {/* Right Column: Code Specifications & GitHub Info */}
              <div className="col-span-1 md:col-span-6 flex flex-col space-y-5 justify-between">
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-warm-primary mb-2">Project Features & Key Specs</h4>
                  <ul className="text-xs text-warm-variant space-y-2 pl-4 list-disc">
                    {activeProjectDetail.feats.map((feat, idx) => (
                      <li key={idx} className="leading-relaxed">{feat}</li>
                    ))}
                  </ul>
                </div>

                {/* Simulated Local Code Terminal / Git Status log (Aesthetic context) */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden flex flex-col shadow-lg">
                  
                  {/* Terminal Header */}
                  <div className="bg-neutral-800 px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal className="text-emerald-400 w-3.5 h-3.5" />
                      <span className="text-[10px] font-mono font-semibold text-neutral-300">
                        git@github.com:Omrane02/{activeProjectDetail.github.split("/").pop()}
                      </span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-rose-500" />
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                  </div>

                  {/* Terminal Body */}
                  <div className="p-4 font-mono text-[10px] bg-neutral-950 text-neutral-300 space-y-1.5">
                    <div><span className="text-emerald-400">$</span> git log --oneline -n 3</div>
                    <div className="text-neutral-500">fbc43d1 - docs: update project details with bilingual specs</div>
                    <div className="text-neutral-500">92a8e71 - refactor: streamline core configuration modules</div>
                    <div className="text-neutral-500">1a2e3b4 - feat: initial release of {activeProjectDetail.title}</div>
                    <div className="pt-2"><span className="text-emerald-400">$</span> git status</div>
                    <div className="text-emerald-400">On branch main. Your branch is up to date. nothing to commit.</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-warm-container border-t border-warm-outline-variant/30 flex justify-between items-center flex-wrap gap-4">
              <span className="text-xs text-warm-variant font-mono truncate max-w-xs md:max-w-md">
                Repository: {activeProjectDetail.github}
              </span>
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveProjectDetail(null)}
                  className="px-4 py-2 border border-warm-outline-variant/50 text-warm-dark font-semibold rounded-lg text-xs hover:bg-warm-bg cursor-pointer transition-colors"
                >
                  Close
                </button>
                <a
                  href={activeProjectDetail.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 bg-warm-primary hover:bg-warm-primary/95 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                >
                  <Github className="w-4 h-4" />
                  View Repository
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
