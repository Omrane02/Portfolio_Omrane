import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-warm-bg/90 backdrop-blur-md shadow-sm border-b border-warm-outline-variant/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-bold font-display tracking-tight hover:opacity-80 transition-opacity text-left"
        >
          <span className="text-warm-primary font-bold">Omrane</span> Riahi
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <button
            onClick={() => handleScrollTo("about")}
            className="text-warm-variant hover:text-warm-primary hover:scale-105 transition duration-200 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleScrollTo("projects")}
            className="text-warm-variant hover:text-warm-primary hover:scale-105 transition duration-200 cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => handleScrollTo("expertise")}
            className="text-warm-variant hover:text-warm-primary hover:scale-105 transition duration-200 cursor-pointer"
          >
            Contact & Expertise
          </button>
        </nav>

        {/* Right controls (Mobile Toggle / Desktop icons) */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-warm-dark hover:bg-warm-container/50 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-warm-lowest border-b border-warm-outline-variant/50 max-w-full px-6 py-6 flex flex-col space-y-4 animate-fadeIn">
          <button
            onClick={() => handleScrollTo("about")}
            className="text-left text-base font-semibold py-2 border-b border-warm-outline-variant/10 text-warm-dark hover:text-warm-primary transition-colors"
          >
            About Me
          </button>
          <button
            onClick={() => handleScrollTo("projects")}
            className="text-left text-base font-semibold py-2 border-b border-warm-outline-variant/10 text-warm-dark hover:text-warm-primary transition-colors"
          >
            Featured Projects
          </button>
          <button
            onClick={() => handleScrollTo("expertise")}
            className="text-left text-base font-semibold py-2 border-b border-warm-outline-variant/10 text-warm-dark hover:text-warm-primary transition-colors"
          >
            Expertise & Connect
          </button>
        </div>
      )}
    </header>
  );
}
