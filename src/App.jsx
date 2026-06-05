import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  const location = useLocation();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectsPage />
            </motion.div>
          }
        />
      </Routes>
      </AnimatePresence>

      {/* Persistent Floating Back-to-Top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-xl bg-space-800/80 border border-white/[0.08] backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/30 transition-all shadow-lg group"
        aria-label="Back to top"
      >
        <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </>
  );
}

export default App;
