import { motion } from 'framer-motion';
import { Code2, Layout, Server, Brain, Database, Wrench } from 'lucide-react';
import SectionWrapper from '../components/UI/SectionWrapper';
import PixelLabel from '../components/UI/PixelLabel';
import { skillCategories } from '../data/skills';

const categoryIcons = {
  Languages: Code2,
  Frontend: Layout,
  Backend: Server,
  'AI / Machine Learning': Brain,
  Databases: Database,
  'Tools & Platforms': Wrench,
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <PixelLabel>/SKILLS</PixelLabel>

      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
        Skills & Technologies
      </h2>
      <p className="text-slate-400 font-body mb-12 max-w-2xl">
        Technologies I use to build full-stack applications, AI systems, and
        developer tools.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, i) => {
          const CategoryIcon = categoryIcons[category.title] || Code2;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card glass-card-hover p-5"
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-white/[0.06]">
                <CategoryIcon size={16} className="text-indigo-400" />
                <h3 className="font-heading text-sm font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-white/[0.03] transition-colors group"
                  >
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-4 h-4 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-4 h-4 flex-shrink-0 rounded bg-indigo-500/10 flex items-center justify-center">
                        <span className="text-[7px] text-indigo-400 font-bold">
                          {skill.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <span className="text-xs text-slate-400 font-body group-hover:text-slate-300 transition-colors truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
