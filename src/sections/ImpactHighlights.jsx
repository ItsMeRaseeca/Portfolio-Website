import { motion } from 'framer-motion';
import {
  GraduationCap,
  Trophy,
  Briefcase,
  GitBranch,
  Layers,
} from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    value: '9.09',
    label: 'CGPA',
    color: 'text-indigo-400',
  },
  {
    icon: Trophy,
    value: '1st',
    label: 'Hackathon Winner',
    color: 'text-amber-400',
  },
  {
    icon: Briefcase,
    value: '6mo',
    label: 'Web Dev Intern',
    color: 'text-violet-400',
  },
  {
    icon: GitBranch,
    value: 'GSSoC',
    label: 'Open Source',
    color: 'text-emerald-400',
  },
  {
    icon: Layers,
    value: '4+',
    label: 'AI Projects',
    color: 'text-cyan-400',
  },
];

export default function ImpactHighlights() {
  return (
    <section className="relative py-16 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card glass-card-hover p-4 text-center group"
              >
                <Icon
                  size={20}
                  className={`mx-auto mb-2.5 ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                />
                <div className="font-heading font-bold text-xl text-white mb-0.5">
                  {item.value}
                </div>
                <div className="text-[11px] text-slate-500 font-body font-medium uppercase tracking-wider">
                  {item.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
