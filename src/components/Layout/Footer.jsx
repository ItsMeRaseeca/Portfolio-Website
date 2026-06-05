import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {


  return (
    <footer className="relative border-t border-white/[0.06] bg-space-900/50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Spacer for absolute centering of middle element */}
          <div className="hidden md:block flex-1" />

          {/* Copyright Center */}
          <p className="text-sm text-slate-500 font-body text-center flex-shrink-0">
            © {new Date().getFullYear()} Raseeca Kashelkar.
          </p>

          {/* Icons Right */}
          <div className="flex items-center justify-end gap-3 sm:gap-4 flex-1">
            <a
              href="mailto:raseecakashelkar163@gmail.com"
              className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all group"
              aria-label="Email"
            >
              <Mail size={18} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/ItsMeRaseeca"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all group"
              aria-label="GitHub"
            >
              <Github size={18} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/raseeca-kashelkar-47a8a9246/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all group"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}
