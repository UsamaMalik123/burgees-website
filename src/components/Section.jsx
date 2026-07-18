import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const easeOut = [0.16, 1, 0.3, 1];
const spring = { type: 'spring', stiffness: 260, damping: 24 };

export default function Section({ id, className = '', children, dark = true }) {
  return (
    <section
      id={id}
      className={`relative py-18 md:py-22 px-6 md:px-10 ${dark ? 'bg-ink-900' : 'bg-ink-800'} ${className}`}
    >
      <div className="mx-auto max-w-content">{children}</div>
    </section>
  );
}

// Text/copy reveal — a soft focus-pull (blur clears, slight rise) rather than a stock slide-up.
export function Reveal({ children, delay = 0, y = 18, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.8, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({ children, className = '', stagger = 0.08 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0, margin: '0px 0px -60px 0px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Card reveal — a small settle-in (scale + rise) on spring physics, so a row of cards
// feels like it's landing rather than all sliding up on the same mechanical curve.
export const RevealItem = forwardRef(function RevealItem({ children, className = '', y = 16, ...rest }, ref) {
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y, scale: 0.96 },
        show: { opacity: 1, y: 0, scale: 1, transition: spring },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
});

// Photo reveal — the image arrives via scale + opacity only, no translate, so it reads
// as a photograph coming into frame rather than another element sliding up the page.
export function RevealPhoto({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.08 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0, margin: '0px 0px -60px 0px' }}
      transition={{ ...spring, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
