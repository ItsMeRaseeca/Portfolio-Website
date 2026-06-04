import { motion } from 'framer-motion';
import { Trophy, Award, Star, GitPullRequest } from 'lucide-react';
import SectionWrapper from '../components/UI/SectionWrapper';
import PixelLabel from '../components/UI/PixelLabel';
import { achievements } from '../data/achievements';

const iconMap = {
  winner: Trophy,
  finalist: Award,
  contribution: GitPullRequest,
};

const colorMap = {
  winner: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  finalist: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
  contribution: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
};

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <PixelLabel>/ACHIEVEMENTS</PixelLabel>

      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-12">
        Achievements
      </h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {achievements.map((item, i) => {
          const Icon = iconMap[item.type] || Star;
          const colors = colorMap[item.type] || colorMap.finalist;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card glass-card-hover p-6 group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center ${colors}`}
                >
                  <Icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-pixel text-[8px] text-slate-500 tracking-wider">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
