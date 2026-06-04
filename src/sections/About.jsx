import { motion } from 'framer-motion';
import SectionWrapper from '../components/UI/SectionWrapper';
import PixelLabel from '../components/UI/PixelLabel';

export default function About() {
  return (
    <SectionWrapper id="about">
      <PixelLabel>/ABOUT</PixelLabel>

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        {/* Text content — takes more space */}
        <div className="lg:col-span-3">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-8">
            Building systems that{' '}
            <span className="text-gradient">think and scale</span>
          </h2>

          <div className="space-y-5 text-slate-400 font-body leading-relaxed">
            <p>
              I&#39;m a Full Stack Developer and AI/ML enthusiast currently
              pursuing Information Technology at Thadomal Shahani Engineering
              College. I build end-to-end systems — from training machine
              learning models to shipping production applications.
            </p>
            <p>
              My journey started with a curiosity for how things work under the
              hood. That curiosity evolved into building products that solve real
              problems — whether it&#39;s an AI-powered scam detection platform,
              an emergency response system, or a service booking app that won a
              national hackathon.
            </p>
            <p>
              I think across the stack. I design interfaces that feel intuitive,
              architect backends that scale, and integrate AI capabilities that
              make products genuinely smarter. When I&#39;m not building, I&#39;m
              mentoring at hackathons, contributing to open source, or exploring
              what&#39;s next in agentic AI and computer vision.
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
