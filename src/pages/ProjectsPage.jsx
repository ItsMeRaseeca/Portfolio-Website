import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import CommandPalette from '../components/Layout/CommandPalette';
import ScrollProgress from '../components/UI/ScrollProgress';
import GradientOrb from '../components/UI/GradientOrb';
import { featuredProjects, additionalProjects } from '../data/projects';

export default function ProjectsPage() {
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="noise-overlay" />
      <div className="grid-overlay" />
      <ScrollProgress />
      
      <CommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />
      <Navbar onCommandPalette={() => setCmdOpen(true)} />

      <main className="relative z-10 pt-32 pb-24">
        {/* Ambient orbs */}
        <GradientOrb className="w-[600px] h-[600px] top-0 left-1/4" color="indigo" />

        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <header className="mb-20">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              All <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-lg text-slate-400 font-body max-w-2xl leading-relaxed">
              A deeper look into the systems, experiments, research, and hackathon
              projects I&#39;ve built.
            </p>
          </header>

          {/* Detailed Featured Projects */}
          <div className="space-y-24 mb-32">
            {featuredProjects.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16"
              >
                <div>
                  <h2 className="font-heading text-3xl font-bold text-white mb-3">
                    {project.title}
                  </h2>
                  <p className="text-indigo-400 font-body font-medium mb-6">
                    {project.tagline}
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-heading font-semibold text-white uppercase tracking-wider mb-2">
                        The Problem
                      </h3>
                      <p className="text-slate-400 font-body text-sm leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-heading font-semibold text-white uppercase tracking-wider mb-2">
                        The Solution
                      </h3>
                      <p className="text-slate-400 font-body text-sm leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-heading font-semibold text-white uppercase tracking-wider mb-2">
                        Architecture
                      </h3>
                      <p className="text-slate-400 font-body text-sm leading-relaxed">
                        {project.architecture}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Image Placeholder */}
                  <div className={`aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br ${project.color} border border-white/[0.06] flex items-center justify-center relative`}>
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                      }}
                    />
                     <span className="text-sm text-slate-500 font-body relative z-10">
                        Screenshot Placehoder
                     </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-heading font-semibold text-white uppercase tracking-wider mb-3">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="tech-tag text-[10px] px-2 py-1">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                       <h3 className="text-sm font-heading font-semibold text-white uppercase tracking-wider mb-3">
                        Outcomes
                      </h3>
                      <ul className="space-y-2">
                        {project.outcomes.map((outcome, j) => (
                           <li key={j} className="flex items-start gap-2 text-xs text-slate-400 font-body">
                             <span className="w-1 h-1 rounded-full bg-indigo-500/60 mt-1.5 flex-shrink-0" />
                             {outcome}
                           </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
                     <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary py-2 px-4 text-xs"
                      >
                        <Github size={14} />
                        View Source
                      </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* More on GitHub */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-8">
              More Experiments
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
               {additionalProjects.map((project, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.4, delay: i * 0.1 }}
                   className="glass-card p-6 flex flex-col h-full group"
                 >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-heading font-semibold text-white group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-white transition-colors"
                      >
                         <Github size={18} />
                      </a>
                    </div>
                    <p className="text-sm text-slate-400 font-body mb-6 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                       {project.technologies.map(tech => (
                          <span key={tech} className="text-[10px] text-slate-500 font-body bg-white/[0.03] px-2 py-1 rounded">
                             {tech}
                          </span>
                       ))}
                    </div>
                 </motion.div>
               ))}
            </div>
            
            <div className="text-center mt-12">
               <a
                  href="https://github.com/raseeca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-body text-sm transition-colors"
                >
                  <Github size={16} />
                  See all repositories on GitHub
                </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
