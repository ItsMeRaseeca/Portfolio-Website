import { motion } from 'framer-motion';
import SectionWrapper from '../components/UI/SectionWrapper';
import PixelLabel from '../components/UI/PixelLabel';
import { education } from '../data/achievements';

export default function Education() {
  return (
    <SectionWrapper id="education">
      <PixelLabel>/EDUCATION</PixelLabel>

      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-12">
        Education
      </h2>

      <div className="relative pl-10">
        {/* Timeline line */}
        <div className="timeline-line" />

        {education.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative pb-10 last:pb-0"
          >
            {/* Timeline dot */}
            <div className="timeline-dot top-1.5" />

            {/* Card */}
            <div className="glass-card glass-card-hover p-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="font-heading text-base font-semibold text-white mb-1">
                    {item.degree}
                  </h3>
                  {item.institution && (
                    <p className="text-sm text-slate-400 font-body">
                      {item.institution}
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <span className="font-pixel text-[8px] text-slate-500 tracking-wider">
                    {item.period}
                  </span>
                  <span className="text-sm font-heading font-semibold text-indigo-400">
                    {item.score}
                  </span>
                </div>
              </div>
              {item.status === 'current' && (
                <div className="mt-3 inline-flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-glow-pulse" />
                  <span className="text-[11px] text-emerald-400/70 font-body">
                    Currently pursuing
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
