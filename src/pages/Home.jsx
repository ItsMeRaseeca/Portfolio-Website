import { useState } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import CommandPalette from '../components/Layout/CommandPalette';
import ScrollProgress from '../components/UI/ScrollProgress';
import Starfield from '../components/UI/Starfield';

/* Sections */
import Hero from '../sections/Hero';
import ImpactHighlights from '../sections/ImpactHighlights';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Achievements from '../sections/Achievements';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Education from '../sections/Education';
import Leadership from '../sections/Leadership';
import Contact from '../sections/Contact';

export default function Home() {
  const [cmdOpen, setCmdOpen] = useState(false);

  return (
    <>
      {/* Global Elements */}
      <div className="noise-overlay" />
      <div className="grid-overlay" />
      <ScrollProgress />
      <Starfield />
      
      <CommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />
      <Navbar onCommandPalette={() => setCmdOpen(true)} />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <ImpactHighlights />
        <About />
        <Projects />
        <Achievements />
        <Skills />
        <Experience />
        <Education />
        <Leadership />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
