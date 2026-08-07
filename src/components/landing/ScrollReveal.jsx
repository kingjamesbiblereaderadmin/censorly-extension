import { motion } from "framer-motion";

// Wraps children with a fade + slide-up reveal when scrolled into view.
// `delay` (seconds) offsets the animation; `y` controls the slide distance.
export default function ScrollReveal({ children, delay = 0, y = 28, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}