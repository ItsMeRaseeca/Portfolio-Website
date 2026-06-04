import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Home,
  User,
  FolderOpen,
  Code2,
  Briefcase,
  GraduationCap,
  Mail,
  Trophy,
  Users,
  ExternalLink,
} from 'lucide-react';

const commands = [
  { label: 'Home', icon: Home, action: 'scroll', target: 'hero' },
  { label: 'About', icon: User, action: 'scroll', target: 'about' },
  { label: 'Projects', icon: FolderOpen, action: 'scroll', target: 'projects' },
  { label: 'Skills', icon: Code2, action: 'scroll', target: 'skills' },
  { label: 'Experience', icon: Briefcase, action: 'scroll', target: 'experience' },
  { label: 'Education', icon: GraduationCap, action: 'scroll', target: 'education' },
  { label: 'Achievements', icon: Trophy, action: 'scroll', target: 'achievements' },
  { label: 'Leadership', icon: Users, action: 'scroll', target: 'leadership' },
  { label: 'Contact', icon: Mail, action: 'scroll', target: 'contact' },
  { label: 'All Projects Page', icon: ExternalLink, action: 'navigate', target: '/projects' },
  { label: 'GitHub', icon: ExternalLink, action: 'link', target: 'https://github.com/raseeca' },
  { label: 'LinkedIn', icon: ExternalLink, action: 'link', target: 'https://linkedin.com/in/raseeca' },
];

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    if (!isOpen) setQuery('');
  }, [isOpen]);

  /* Close on Escape */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const executeCommand = (cmd) => {
    onClose();

    if (cmd.action === 'scroll') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(cmd.target);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        const el = document.getElementById(cmd.target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (cmd.action === 'navigate') {
      navigate(cmd.target);
    } else if (cmd.action === 'link') {
      window.open(cmd.target, '_blank');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[201] w-full max-w-lg"
          >
            <div className="mx-4 rounded-xl border border-white/[0.08] bg-space-800/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden">
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06]">
                <Search size={16} className="text-slate-500 flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search or jump to..."
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 outline-none font-body"
                />
                <kbd className="text-[10px] text-slate-600 font-mono px-1.5 py-0.5 border border-white/[0.08] rounded">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-[320px] overflow-y-auto py-2">
                {filtered.length > 0 ? (
                  filtered.map((cmd) => {
                    const Icon = cmd.icon;
                    return (
                      <button
                        key={cmd.label}
                        onClick={() => executeCommand(cmd)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300 hover:bg-white/[0.04] hover:text-white transition-colors"
                      >
                        <Icon size={15} className="text-slate-500 flex-shrink-0" />
                        <span className="font-body">{cmd.label}</span>
                        {cmd.action === 'link' && (
                          <ExternalLink
                            size={12}
                            className="ml-auto text-slate-600"
                          />
                        )}
                      </button>
                    );
                  })
                ) : (
                  <p className="px-4 py-6 text-sm text-slate-500 text-center">
                    No results found.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
