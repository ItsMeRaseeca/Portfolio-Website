import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/[0.06] bg-space-900/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-slate-500 font-body">
            Raseeca Kashelkar © {new Date().getFullYear()}
          </p>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <a
              href="#projects"
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
            >
              Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/raseeca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/raseeca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:raseeca@email.com"
              className="text-slate-500 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Back-to-Top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-xl bg-space-800/80 border border-white/[0.08] backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/30 transition-all group"
        aria-label="Back to top"
      >
        <ArrowUp
          size={16}
          className="group-hover:-translate-y-0.5 transition-transform"
        />
      </button>
    </footer>
  );
}
