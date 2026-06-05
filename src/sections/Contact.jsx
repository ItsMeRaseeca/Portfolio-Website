import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SectionWrapper from '../components/UI/SectionWrapper';
import GradientOrb from '../components/UI/GradientOrb';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'raseecakashelkar163@gmail.com',
    href: 'mailto:raseecakashelkar163@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 96192 00100',
    href: 'tel:+919619200100',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mumbai, India',
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    // Basic timeout to show the success state, form will still submit natively
    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setForm({ name: '', email: '', message: '' });
    }, 100);
  };

  return (
    <SectionWrapper id="contact" className="overflow-hidden">
      {/* Ambient orb */}
      <GradientOrb className="w-[500px] h-[500px] -bottom-40 -right-40" color="violet" />

      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
          Let&#39;s Build Something{' '}
          <span className="text-gradient">Interesting</span>
        </h2>
        <p className="text-slate-400 font-body max-w-lg mx-auto">
          Have an idea, opportunity, or just want to connect? I&#39;m always
          open to collaborating on impactful projects.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Contact Info Cards */}
        <div className="lg:col-span-2 space-y-3">
          {contactInfo.map((item, i) => {
            const Icon = item.icon;
            const Tag = item.href ? 'a' : 'div';
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Tag
                  {...(item.href
                    ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="glass-card glass-card-hover p-4 flex items-center gap-4 block"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-body uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm text-white font-body font-medium">
                      {item.value}
                    </p>
                  </div>
                </Tag>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          action="mailto:raseecakashelkar163@gmail.com"
          method="POST"
          encType="text/plain"
          className="lg:col-span-3 glass-card p-6 sm:p-8 space-y-5 shadow-[0_0_30px_rgba(99,102,241,0.15)]"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs text-slate-500 font-body uppercase tracking-wider mb-2"
              >
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-space-900/60 border border-white/[0.08] rounded-xl text-sm text-white font-body placeholder:text-slate-600 focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/20 transition-all shadow-[0_0_0_rgba(99,102,241,0)] focus:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs text-slate-500 font-body uppercase tracking-wider mb-2"
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-space-900/60 border border-white/[0.08] rounded-xl text-sm text-white font-body placeholder:text-slate-600 focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/20 transition-all shadow-[0_0_0_rgba(99,102,241,0)] focus:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                placeholder="you@email.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs text-slate-500 font-body uppercase tracking-wider mb-2"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 bg-space-900/60 border border-white/[0.08] rounded-xl text-sm text-white font-body placeholder:text-slate-600 focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/20 transition-all shadow-[0_0_0_rgba(99,102,241,0)] focus:shadow-[0_0_15px_rgba(99,102,241,0.2)] resize-none"
              placeholder="Tell me about your project or opportunity..."
            />
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitted ? (
              'Message Sent ✓'
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
