import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
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

      <div className="relative pl-10">
        {/* Timeline line */}
        <div className="timeline-line" />

        {leadership.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pb-6 last:pb-0"
          >
            {/* Timeline dot */}
            <div className="timeline-dot top-1.5" />

            {/* Card */}
            <div className="glass-card glass-card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <Users size={18} className="text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-1">
                    {item.role}
                  </h3>
                  <p className="text-sm text-indigo-400 font-body font-medium mb-3">
                    {item.organization}
                  </p>
                  <p className="text-sm text-slate-400 font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
