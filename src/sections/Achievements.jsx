import { motion } from 'framer-motion';
import { Trophy, Image as ImageIcon, ExternalLink } from 'lucide-react';
import SectionWrapper from '../components/UI/SectionWrapper';
import PixelLabel from '../components/UI/PixelLabel';
import { achievements, certifications } from '../data/achievements';

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" className="!pt-4 md:!pt-8">
      <PixelLabel>/ACHIEVEMENTS</PixelLabel>

      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-12">
        Achievements
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, i) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#0b0515]/90 border border-indigo-500/20 hover:border-indigo-500/40 rounded-2xl p-4 sm:p-5 flex flex-col group transition-colors shadow-[0_0_15px_rgba(99,102,241,0.05)] hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
            >
              {/* Image Container (Inset) */}
              <div className="relative w-full aspect-video rounded-xl bg-space-800 overflow-hidden mb-6 flex-shrink-0 border border-white/[0.05]">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 bg-space-900">
                    <ImageIcon size={24} className="mb-2 opacity-50" />
                    <span className="text-[10px] font-pixel tracking-wider">Image Placeholder</span>
                  </div>
                )}
              </div>
              
              {/* Content Box */}
              <div className="flex items-start gap-4 flex-1">
                {/* Icon Box */}
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <Trophy size={18} className="text-white" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-1">
                  <h3 className="font-heading text-lg font-bold text-white mb-1 leading-snug group-hover:text-indigo-200 transition-colors">
                    {item.title}
                  </h3>
                  <span className="font-pixel text-[10px] text-slate-500 tracking-wider mb-4 uppercase">
                    {item.year}
                  </span>
                  <p className="text-sm text-slate-400 font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Certifications Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="mt-8 pl-4 border-l-2 border-slate-600/50 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] sm:text-sm text-slate-300 font-mono"
      >
        <span className="font-bold text-white">Certifications:</span>
        {certifications.map((cert, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && <span className="mx-3 text-slate-600">&bull;</span>}
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-indigo-400 transition-colors group">
              <span>{cert.title} ({cert.issuer})</span>
              <ExternalLink size={12} className="opacity-50 group-hover:opacity-100" />
            </a>
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
