import { motion } from 'framer-motion';

export default function GlowCard({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      className={`glass-card ${hover ? 'glass-card-hover' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
