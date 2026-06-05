import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import SectionWrapper from '../components/UI/SectionWrapper';
import PixelLabel from '../components/UI/PixelLabel';
import { certifications } from '../data/achievements';

export default function Certifications() {
  if (!certifications || certifications.length === 0) return null;

  return (
    <SectionWrapper id="certifications">
      <PixelLabel>/CERTIFICATIONS</PixelLabel>

      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-12">
        Certifications
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex"
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-6 group flex flex-col justify-between w-full no-underline"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <Award size={20} className="text-indigo-400" />
                  </div>
                  <ExternalLink size={16} className="text-slate-500 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="font-heading text-lg font-semibold text-white mb-2 leading-tight group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 font-body">
                  {item.issuer}
                </p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
