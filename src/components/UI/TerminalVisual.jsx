import { motion } from 'framer-motion';

export default function TerminalVisual() {
  const lines = [
    { type: 'command', text: '$ whoami' },
    { type: 'output', text: 'Raseeca Kashelkar' },
    { type: 'spacer' },
    { type: 'command', text: '$ cat stack.conf' },
    { type: 'config', key: 'frontend', value: 'React, Next.js, TypeScript' },
    { type: 'config', key: 'backend', value: 'Node.js, FastAPI, Express' },
    { type: 'config', key: 'ai_ml', value: 'PyTorch, NLP, Computer Vision' },
    { type: 'config', key: 'database', value: 'PostgreSQL, MongoDB' },
    { type: 'spacer' },
    { type: 'command', text: '$ status --check' },
    { type: 'progress' },
    { type: 'cursor' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      className="relative"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-8 bg-indigo-500/8 blur-3xl rounded-full" />

      {/* Terminal window */}
      <div className="relative rounded-xl border border-white/[0.08] bg-space-800/80 backdrop-blur-md overflow-hidden shadow-2xl shadow-indigo-500/5">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-space-900/60">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80" />
          </div>
          <span className="text-[11px] text-slate-500 font-mono ml-2 select-none">
            system.terminal
          </span>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-glow-pulse" />
            <span className="text-[9px] text-emerald-400/60 font-mono select-none">
              online
            </span>
          </div>
        </div>

        {/* Terminal content */}
        <div className="p-5 font-mono text-[13px] leading-relaxed space-y-1.5">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
            >
              {line.type === 'command' && (
                <div className="text-slate-500">{line.text}</div>
              )}
              {line.type === 'output' && (
                <div className="text-slate-200 font-medium">{line.text}</div>
              )}
              {line.type === 'spacer' && <div className="h-2" />}
              {line.type === 'config' && (
                <div>
                  <span className="text-indigo-400">{line.key}</span>
                  <span className="text-slate-600">: </span>
                  <span className="text-slate-400">{line.value}</span>
                </div>
              )}
              {line.type === 'progress' && (
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex gap-[2px]">
                    {Array.from({ length: 20 }).map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, scaleY: 0.3 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        transition={{ duration: 0.2, delay: 1.2 + j * 0.04 }}
                        className={`w-[5px] h-3 rounded-[1px] ${
                          j < 17 ? 'bg-indigo-500' : 'bg-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    className="text-emerald-400 text-[11px]"
                  >
                    READY
                  </motion.span>
                </div>
              )}
              {line.type === 'cursor' && (
                <div className="flex items-center mt-1">
                  <span className="text-slate-500">$ </span>
                  <span className="ml-1 w-[7px] h-4 bg-indigo-400/80 animate-blink" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
