import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
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
    value: '1',
    label: 'Hackathon Wins',
    color: 'text-amber-400',
  },
  {
    icon: Briefcase,
    value: '6mo',
    label: 'Web Dev Intern',
    color: 'text-violet-400',
  },
  {
    icon: Layers,
    value: '4+',
    label: 'Major Projects',
    color: 'text-cyan-400',
  },
];

function AnimatedValue({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    // Check if the value is a number or starts with a number
    const numMatch = String(value).match(/^([\d.]+)(.*)$/);
    if (numMatch) {
      const target = parseFloat(numMatch[1]);
      const suffix = numMatch[2] || '';
      const decimals = numMatch[1].includes('.') ? numMatch[1].split('.')[1].length : 0;
      
      const controls = animate(0, target, {
        duration: 3.5, // Slowed down from 2
        ease: "easeOut",
        onUpdate: (v) => {
          if (ref.current) {
            ref.current.textContent = v.toFixed(decimals) + suffix;
          }
        }
      });
      return () => controls.stop();
    } else {
      ref.current.textContent = value;
    }
  }, [isInView, value]);

  return <span ref={ref}>0</span>;
}

export default function ImpactHighlights() {
  return (
    <section className="relative pt-6 pb-16 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card glass-card-hover p-5 text-center group"
              >
                <Icon
                  size={24}
                  className={`mx-auto mb-3 ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                />
                <div className="font-heading font-bold text-2xl text-white mb-1">
                  <AnimatedValue value={item.value} />
                </div>
                <div className="text-xs text-slate-500 font-body font-medium uppercase tracking-wider">
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
