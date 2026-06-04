import { motion } from 'framer-motion';
import SectionWrapper from '../components/UI/SectionWrapper';
import PixelLabel from '../components/UI/PixelLabel';
import { experience } from '../data/achievements';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <PixelLabel>/EXPERIENCE</PixelLabel>

      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-12">
        Experience
      </h2>

      <div className="relative pl-10">
        {/* Timeline line */}
        <div className="timeline-line" />

        {experience.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative pb-12 last:pb-0"
          >
            {/* Timeline dot */}
            <div className="timeline-dot top-1.5" />

            {/* Card */}
            <div className="glass-card glass-card-hover p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="text-sm text-indigo-400 font-body font-medium">
                    {item.company}
                  </p>
                </div>
                <span className="font-pixel text-[8px] text-slate-500 tracking-wider whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              <ul className="space-y-2">
                {item.description.map((point, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-slate-400 font-body"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-500/60 mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
