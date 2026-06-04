import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, ArrowRight, Monitor } from 'lucide-react';
import SectionWrapper from '../components/UI/SectionWrapper';
import PixelLabel from '../components/UI/PixelLabel';
import { featuredProjects } from '../data/projects';

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <PixelLabel>/PROJECTS</PixelLabel>

      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
        Featured Projects
      </h2>
      <p className="text-slate-400 font-body mb-16 max-w-2xl">
        End-to-end systems built for hackathons, production use, and research
        exploration.
      </p>

      <div className="space-y-20">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
              i % 2 === 1 ? 'lg:direction-rtl' : ''
            }`}
          >
            {/* Project Image Placeholder */}
            <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div
                className={`relative aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br ${project.color} border border-white/[0.06] group`}
              >
                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center group-hover:border-indigo-500/20 transition-colors">
                      <Monitor
                        size={24}
                        className="text-slate-500 group-hover:text-slate-400 transition-colors"
                      />
                    </div>
                    <span className="text-xs text-slate-500 font-body">
                      Screenshot coming soon
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-indigo-400 font-body font-medium mb-4">
                {project.tagline}
              </p>
              <p className="text-slate-400 font-body leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Impact highlight */}
              {project.impact && (
                <p className="text-sm text-slate-300 font-body font-medium mb-5 pl-3 border-l-2 border-indigo-500/40">
                  {project.impact}
                </p>
              )}

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group/link"
              >
                <Github size={16} />
                <span>View on GitHub</span>
                <ArrowRight
                  size={14}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-body font-medium transition-colors group"
        >
          <span>View All Projects</span>
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
