/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-warm-bg text-warm-dark font-sans selection:bg-warm-primary selection:text-white leading-normal tracking-normal overflow-x-hidden">
      
      {/* Portals Top/Header */}
      <Header />

      {/* Hero Welcome Banner */}
      <Hero />

      {/* About Profile Details */}
      <About />

      {/* Portfolio Card Listings */}
      <Projects />

      {/* Expertise Bento Cards */}
      <Expertise />

      {/* Inline interactive contact forms */}
      <Contact />

      {/* Unified footer */}
      <Footer />

    </div>
  );
}
