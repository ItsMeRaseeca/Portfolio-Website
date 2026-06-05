import { motion } from 'framer-motion';

export default function SectionWrapper({ children, id, className = '' }) {
  return (
    <section id={id} className={`relative py-16 md:py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-6xl mx-auto px-6"
      >
        {children}
      </motion.div>
    </section>
  );
}
