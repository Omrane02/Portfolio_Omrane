import { SKILL_CATEGORIES } from "../data";
import { Monitor, Database, Cloud, Wrench, ShieldAlert } from "lucide-react";

export default function Expertise() {
  
  // Icon selector helper
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Monitor":
        return <Monitor className="w-5 h-5 text-warm-primary" />;
      case "Database":
        return <Database className="w-5 h-5 text-warm-primary" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-warm-primary" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-warm-primary" />;
      default:
        return <Wrench className="w-5 h-5 text-warm-primary" />;
    }
  };

  return (
    <section id="expertise" className="py-24 bg-warm-lowest border-t border-b border-warm-outline-variant/20 scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-warm-dark">
            Technical Expertise
          </h2>
          <div className="w-12 h-1 bg-warm-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="group bg-warm-bg border border-warm-outline-variant/35 rounded-2xl p-8 hover:bg-warm-container/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* Icon Frame */}
              <div className="w-12 h-12 rounded-xl bg-warm-container border border-warm-outline-variant/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {renderIcon(cat.icon)}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold font-display text-warm-dark mb-4">
                {cat.title}
              </h3>

              {/* List of skills with custom square bullets from mockup */}
              <ul className="space-y-3.5">
                {cat.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="flex items-center gap-3 text-sm text-warm-variant">
                    {/* Small solid brown bullet */}
                    <span className="w-2 h-2 rounded-xs bg-warm-primary shrink-0 opacity-80" />
                    <span className="font-medium text-warm-dark/90 text-xs sm:text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Security / Quality Callout footer */}
        <div className="mt-16 bg-warm-low/80 border border-warm-outline-variant/30 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 max-w-4xl mx-auto">
          <div className="p-3 rounded-full bg-warm-container border border-warm-outline-variant/40 shrink-0">
            <ShieldAlert className="w-5 h-5 text-warm-primary" />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold font-display text-warm-dark">Rigorous Software Standards & Compliance</h4>
            <p className="text-xs text-warm-variant mt-1">
              All backend architectures respect security paradigms: secure credential handshakes, environment compartmentalization, rate-limiting, robust CORS, and sanitization of user data.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
