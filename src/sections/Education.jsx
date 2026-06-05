import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import SectionWrapper from '../components/UI/SectionWrapper';
import PixelLabel from '../components/UI/PixelLabel';
import { education } from '../data/achievements';

export default function Education() {
  return (
    <SectionWrapper id="education">
      <PixelLabel>/EDUCATION</PixelLabel>

      <div className="flex flex-col items-center mb-16">
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-indigo-500 mb-2">
          Education
        </h2>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Central Vertical Timeline Line */}
        <div className="absolute left-[20px] sm:left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-indigo-500/10 via-indigo-500/40 to-cyan-500/10 transform sm:-translate-x-1/2 hidden sm:block" />
        
        {/* Mobile vertical line */}
        <div className="absolute left-[24px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-indigo-500/10 via-indigo-500/40 to-cyan-500/10 sm:hidden" />

        <div className="flex flex-col gap-16">
          {education.map((item, i) => {
            const isEven = i % 2 === 0;

            return (
              <div key={i} className={`relative flex items-center w-full ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                
                {/* Timeline Dot (Desktop) */}
                <div className="hidden sm:block absolute left-1/2 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)] transform -translate-x-1/2 z-10" />
                
                {/* Timeline Dot (Mobile) */}
                <div className="sm:hidden absolute left-[24px] w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)] transform -translate-x-1/2 z-10" />

                {/* Card Container */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`w-full sm:w-1/2 pl-[60px] sm:pl-0 ${isEven ? 'sm:pr-12' : 'sm:pl-12'}`}
                >
                  <div className="glass-card bg-[#0b0515]/90 border border-white/[0.06] rounded-2xl p-6 sm:p-8 hover:border-indigo-500/30 transition-colors">
                    
                    {/* Institution */}
                    <div className="flex items-start gap-3 mb-4 w-full">
                      <div className="flex-shrink-0 mt-0.5">
                        <GraduationCap size={20} className="text-white" />
                      </div>
                      <h3 className={`font-heading text-[17px] sm:text-[20px] font-bold text-white leading-snug flex-1 text-left ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                        {item.institution}
                      </h3>
                    </div>

                    {/* Degree */}
                    <p className={`text-slate-300 font-body text-sm sm:text-base mb-2 text-left ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                      {item.degree}
                    </p>

                    {/* Score / CGPA */}
                    <p className={`text-violet-400 font-heading font-bold text-lg mb-8 text-left ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                      {item.score}
                    </p>

                    {/* Footer Row (Date & Location) */}
                    <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-slate-400 font-body ${isEven ? 'sm:justify-end sm:gap-6' : 'sm:justify-start sm:gap-6'}`}>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="opacity-80" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="opacity-80" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
