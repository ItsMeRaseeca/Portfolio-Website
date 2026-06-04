import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';
import TerminalVisual from '../components/UI/TerminalVisual';
import GradientOrb from '../components/UI/GradientOrb';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Ambient orbs */}
      <GradientOrb className="w-[600px] h-[600px] -top-40 -left-40" color="indigo" />
      <GradientOrb className="w-[400px] h-[400px] top-20 right-0" color="violet" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text content */}
          <div className="relative z-10">
            {/* Pixel badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block font-pixel text-[9px] text-indigo-400 tracking-[0.15em] px-3 py-1.5 border border-indigo-500/20 rounded-md bg-indigo-500/5 mb-8">
                FULL STACK DEVELOPER • AI/ML
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
            >
              Raseeca
              <br />
              <span className="text-gradient">Kashelkar</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-400 max-w-lg leading-relaxed mb-8 font-body"
            >
              I build end-to-end AI systems — from machine learning models to
              full-stack applications that solve real problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a href="#projects" className="btn-primary">
                <ArrowDown size={16} />
                View Projects
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <a
                href="https://github.com/raseeca"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors group"
                aria-label="GitHub"
              >
                <Github
                  size={18}
                  className="group-hover:text-indigo-400 transition-colors"
                />
              </a>
              <a
                href="https://linkedin.com/in/raseeca"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin
                  size={18}
                  className="group-hover:text-indigo-400 transition-colors"
                />
              </a>
              <a
                href="mailto:raseeca@email.com"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors group"
                aria-label="Email"
              >
                <Mail
                  size={18}
                  className="group-hover:text-indigo-400 transition-colors"
                />
              </a>
            </motion.div>
          </div>

          {/* Right — Terminal Visual */}
          <div className="hidden lg:block">
            <TerminalVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
