import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="bg-warm-lowest border-t border-warm-outline-variant/30 py-12">
      <div className="max-w-[1240px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Brand */}
        <div>
          <h4 className="text-xl font-bold font-display tracking-tight text-warm-dark">
            Omrane Riahi
          </h4>
          <p className="text-xs text-warm-variant/90 mt-1 max-w-sm">
            © {currentYear} Omrane Riahi. Built with Sophisticated Warmth.
          </p>
        </div>

        {/* Dynamic bottom links */}
        <div className="flex gap-6 text-xs font-semibold text-warm-variant">
          <a
            href="https://github.com/Omrane02"
            target="_blank"
            rel="noreferrer"
            className="hover:text-warm-primary transition-colors cursor-pointer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/omrane-riahi-bb748920a/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-warm-primary transition-colors cursor-pointer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:omraneriahi@hotmail.com"
            className="hover:text-warm-primary transition-colors cursor-pointer"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}
