import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SectionWrapper from '../components/UI/SectionWrapper';
import GradientOrb from '../components/UI/GradientOrb';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'raseeca@email.com',
    href: 'mailto:raseeca@email.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 XXXXX XXXXX',
    href: 'tel:+91XXXXXXXXXX',
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
    e.preventDefault();
    // TODO: Connect to Formspree, EmailJS, or your backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', message: '' });
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
          className="lg:col-span-3 glass-card p-6 sm:p-8 space-y-5"
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
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-space-900/60 border border-white/[0.08] rounded-xl text-sm text-white font-body placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/40 transition-colors"
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
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-space-900/60 border border-white/[0.08] rounded-xl text-sm text-white font-body placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/40 transition-colors"
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
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 bg-space-900/60 border border-white/[0.08] rounded-xl text-sm text-white font-body placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/40 transition-colors resize-none"
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
