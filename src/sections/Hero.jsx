import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';
import HeroPixelCard from '../components/UI/HeroPixelCard';
import VaporizeTextCycle, { Tag } from '../components/UI/VaporizeText';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-visible"
    >
      {/* Vignette has been moved to Home.jsx to cover the entire page uniformly */}

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-8 lg:gap-0 items-center">
          {/* Left — Text content */}
          <div className="relative z-10">
            {/* Pixel badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="h-8 w-72 select-none" aria-label="Full Stack Developer · AI/ML">
                <VaporizeTextCycle
                  texts={['FULL STACK DEVELOPER', 'AI / ML ENGINEER']}
                  font={{
                    fontFamily: '"Press Start 2P", monospace',
                    fontSize: '9px',
                    fontWeight: 400,
                  }}
                  color="rgb(167, 139, 250)"
                  spread={4}
                  density={6}
                  animation={{ vaporizeDuration: 2.5, fadeInDuration: 1.2, waitDuration: 3 }}
                  direction="left-to-right"
                  alignment="left"
                  tag={Tag.P}
                />
              </div>
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
              I build end-to-end AI systems from machine learning models to
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
              className="flex items-center gap-6"
            >
              <a
                href="https://github.com/ItsMeRaseeca"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors group"
                aria-label="GitHub"
              >
                <Github
                  size={24}
                  className="group-hover:text-indigo-400 transition-colors"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/raseeca-kashelkar-47a8a9246/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin
                  size={24}
                  className="group-hover:text-indigo-400 transition-colors"
                />
              </a>
              <a
                href="mailto:raseecakashelkar163@gmail.com"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors group"
                aria-label="Email"
              >
                <Mail
                  size={24}
                  className="group-hover:text-indigo-400 transition-colors"
                />
              </a>
            </motion.div>
          </div>

          {/* Right — borderless pixel art */}
          <div className="hidden md:block">
            <HeroPixelCard />
          </div>
        </div>
      </div>
    </section>
  );
}
