import { motion } from "motion/react";
import { ArrowDown, CodeXml } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-center overflow-hidden"
    >
      {/* Absolute Decorative Ambient Blurs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-warm-highest/50 blur-[130px] -z-10" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 rounded-full bg-warm-container/60 blur-[120px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[50vh] rounded-full bg-warm-low/40 blur-[160px] -z-25" />

      <div className="max-w-[1240px] mx-auto px-6 w-full flex flex-col justify-center flex-grow">
        <div className="max-w-4xl text-left">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-warm-container/80 border border-warm-outline-variant/30 py-1 text-xs font-semibold text-warm-primary uppercase tracking-widest leading-none mb-6"
          >
            <CodeXml className="w-3.5 h-3.5" />
            First Year Computer Science Student
          </motion.div>

          {/* Main Statement */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.1] tracking-tight text-warm-dark"
          >
            Building scalable digital experiences with{" "}
            <span className="text-warm-tint relative inline-block">
              sophisticated warmth
              <span className="absolute left-0 bottom-1 w-full h-1 bg-warm-tint/20 rounded-full" />
            </span>
            .
          </motion.h1>

      

          {/* Buttons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4 items-center"
          >
            {/* View my projects */}
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-warm-primary hover:bg-warm-primary/95 text-white font-semibold rounded-xl shadow-lg shadow-warm-primary/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 text-sm"
            >
              View my projects
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bounce scroll down button */}
      <div className="w-full flex justify-center py-6">
        <button
          onClick={() => scrollToSection("about")}
          className="p-3 bg-warm-lowest focus:bg-warm-container border border-warm-outline-variant/40 rounded-full hover:scale-110 shadow-sm transition-all text-warm-variant hover:text-warm-primary cursor-pointer"
          aria-label="Scroll to About"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
