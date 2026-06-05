import { motion } from 'framer-motion';
import SectionWrapper from '../components/UI/SectionWrapper';
import PixelLabel from '../components/UI/PixelLabel';

export default function About() {
  return (
    <SectionWrapper id="about" className="!pb-6 md:!pb-10">
      <PixelLabel>/ABOUT</PixelLabel>

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        {/* Text content — takes more space */}
        <div className="lg:col-span-3">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-8">
            A Brief{' '}
            <span className="text-gradient">Introduction</span>
          </h2>

          <div className="space-y-5 text-slate-400 font-body leading-relaxed">
            <p>
              I'm an Information Technology student at Thadomal Shahani Engineering College with a focus on AI/ML and full-stack development. What I find interesting isn't just building models it's the entire journey from data to deployment and a complete system someone can actually use.
            </p>
            <p>
              My interests span full-stack development, machine learning, agentic AI, and LLM-powered applications. I enjoy taking ideas from concept to production, whether that means training a model, building the backend around it, or creating the experience that ties everything together.
            </p>
            <p>
              Outside of academics, I spend my time building AI projects, participating in hackathons, contributing to open source, and figuring out what's next in agentic AI.
            </p>
          </div>
        </div>

        {/* Retro computer visual */}
        <motion.div
          className="lg:col-span-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full max-w-[280px]">
            {/* Glow */}
            <div className="absolute -inset-4 bg-violet-500/6 blur-3xl rounded-full" />

            {/* Monitor */}
            <div className="relative">
              {/* Screen bezel */}
              <div className="rounded-xl border-2 border-slate-700/50 bg-space-700/80 p-3 shadow-xl">
                {/* Screen */}
                <div className="rounded-lg bg-space-900 p-4 font-mono text-[11px] leading-relaxed border border-slate-700/30">
                  <div className="text-slate-600 mb-2">{'// about.js'}</div>
                  <div>
                    <span className="text-violet-400">const</span>{' '}
                    <span className="text-cyan-400">developer</span>{' '}
                    <span className="text-slate-500">=</span> {'{'}
                  </div>
                  <div className="pl-3">
                    <span className="text-indigo-400">name</span>
                    <span className="text-slate-500">:</span>{' '}
                    <span className="text-emerald-400">&quot;Raseeca&quot;</span>
                    <span className="text-slate-600">,</span>
                  </div>
                  <div className="pl-3">
                    <span className="text-indigo-400">role</span>
                    <span className="text-slate-500">:</span>{' '}
                    <span className="text-emerald-400">&quot;Full Stack&quot;</span>
                    <span className="text-slate-600">,</span>
                  </div>
                  <div className="pl-3">
                    <span className="text-indigo-400">focus</span>
                    <span className="text-slate-500">:</span>{' '}
                    <span className="text-emerald-400">&quot;AI/ML&quot;</span>
                    <span className="text-slate-600">,</span>
                  </div>
                  <div className="pl-3">
                    <span className="text-indigo-400">status</span>
                    <span className="text-slate-500">:</span>{' '}
                    <span className="text-emerald-400">&quot;Building&quot;</span>
                  </div>
                  <div>{'}'}</div>
                  <div className="mt-2 flex items-center">
                    <span className="text-slate-600">{'>'}</span>
                    <span className="ml-1 w-[6px] h-3 bg-indigo-400/70 animate-blink" />
                  </div>
                </div>
              </div>

              {/* Monitor stand */}
              <div className="flex justify-center mt-1">
                <div className="w-16 h-3 bg-slate-700/40 rounded-b-md" />
              </div>
              <div className="flex justify-center">
                <div className="w-24 h-1.5 bg-slate-700/30 rounded-b-lg" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
