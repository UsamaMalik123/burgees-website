import { motion } from 'framer-motion';

export default function CustomCursor({ x, y, glowX, glowY, hovering, visible }) {
  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-screen"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
          width: hovering ? 150 : 90,
          height: hovering ? 150 : 90,
          opacity: visible ? 1 : 0,
          background: 'radial-gradient(circle, rgba(255,79,195,0.45) 0%, rgba(255,79,195,0) 70%)',
        }}
        transition={{ width: 0.3, height: 0.3, opacity: 0.2 }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-pink"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          width: hovering ? 16 : 8,
          height: hovering ? 16 : 8,
          opacity: visible ? 1 : 0,
        }}
        transition={{ width: 0.2, height: 0.2, opacity: 0.2 }}
      />
    </>
  );
}
