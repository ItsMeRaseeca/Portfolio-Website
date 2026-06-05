import { motion } from 'framer-motion';

export default function HeroPixelCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex justify-center items-center"
    >
      {/* Outer ambient glow behind the blob */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(124,58,237,0.3) 0%, transparent 70%)',
          filter: 'blur(28px)',
          transform: 'scale(1.2)',
        }}
      />

      {/* Floating animation wrapper */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Background offset glowing line (like the 3rd inspiration image but neon) */}
        <div
          className="absolute inset-0 w-[360px] h-[360px] xl:w-[420px] xl:h-[420px]"
          style={{
            borderRadius: '41% 59% 45% 55% / 43% 45% 55% 57%',
            border: '2px solid rgba(124, 58, 237, 0.8)',
            boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)',
            transform: 'translate(-12px, 16px)',
          }}
        />

        {/* The main blob cutout */}
        <div 
          className="relative w-[360px] h-[360px] xl:w-[420px] xl:h-[420px]"
          style={{
            /* Irregular blob shape matching the inspo */
            borderRadius: '41% 59% 45% 55% / 43% 45% 55% 57%',
            overflow: 'hidden',
            /* Main glowing border */
            border: '3px solid rgba(167, 139, 250, 0.95)',
            boxShadow: `
              0 0 30px rgba(167, 139, 250, 0.5),
              inset 0 0 20px rgba(167, 139, 250, 0.4)
            `
          }}
        >
          <img
            src="/hero-pixel.jpg"
            alt="Developer coding on a train with a cat"
            draggable={false}
            className="w-full h-full block object-cover object-bottom select-none"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>

        {/* Decorative star sparkles — like inspo images */}
        <motion.span
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute -top-4 -right-2 text-violet-400 text-xl pointer-events-none select-none"
          style={{ textShadow: '0 0 10px rgba(167,139,250,0.8)' }}
        >✦</motion.span>

        <motion.span
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: 0.8 }}
          className="absolute top-1/3 -left-5 text-indigo-400 text-sm pointer-events-none select-none"
          style={{ textShadow: '0 0 10px rgba(129,140,248,0.8)' }}
        >✦</motion.span>

        <motion.span
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
          className="absolute -bottom-3 right-6 text-purple-400 text-xs pointer-events-none select-none"
          style={{ textShadow: '0 0 8px rgba(192,132,252,0.8)' }}
        >✦</motion.span>

        {/* Status chip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full select-none pointer-events-none"
          style={{
            background: 'rgba(12,4,26,0.9)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(167,139,250,0.35)',
            boxShadow: '0 0 12px rgba(124,58,237,0.2)',
          }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
          </span>
          <span className="font-pixel text-[7px] text-violet-300 tracking-widest">executing ideas.exe</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
