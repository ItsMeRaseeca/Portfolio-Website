import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

import ScrollProgress from '../components/UI/ScrollProgress';
import SectionBackground from '../components/UI/SectionBackground';

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

  return (
    <>
      {/* Global Elements */}
      <div className="noise-overlay" />
      <div className="grid-overlay" />
      <ScrollProgress />
      <SectionBackground />
      
      {/* Global Vignette: creates the blurrish/darkened effect over the wave uniformly across all sections */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, rgba(6,0,15,0.6) 100%), ' +
            'radial-gradient(ellipse 60% 80% at 100% 50%, rgba(124,58,237,0.08) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />
      
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <ImpactHighlights />
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
