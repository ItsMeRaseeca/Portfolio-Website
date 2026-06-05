import { motion } from 'framer-motion';
import { Users, Image as ImageIcon } from 'lucide-react';
import SectionWrapper from '../components/UI/SectionWrapper';
import PixelLabel from '../components/UI/PixelLabel';
import { leadership } from '../data/achievements';

export default function Leadership() {
  return (
    <SectionWrapper id="leadership">
      <PixelLabel>/LEADERSHIP</PixelLabel>

      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-12">
        Leadership & Extracurriculars
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {leadership.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-[#0b0515]/90 border border-indigo-500/20 hover:border-indigo-500/40 rounded-2xl p-4 sm:p-5 flex flex-col group transition-colors shadow-[0_0_15px_rgba(99,102,241,0.05)] hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
          >
            {/* Image Container (Inset) */}
            <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-xl bg-space-800 overflow-hidden mb-5 flex-shrink-0 border border-white/[0.05]">
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
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-3 text-violet-400">
                <Users size={16} />
                <span className="font-pixel text-[10px] tracking-wider uppercase">
                  {item.period}
                </span>
              </div>
              
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2 leading-snug group-hover:text-indigo-200 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-sm text-slate-400 font-body leading-relaxed whitespace-pre-wrap flex-1">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
