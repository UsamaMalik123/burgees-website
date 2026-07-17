import { useEffect, useState } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';
import CustomCursor from '../components/CustomCursor.jsx';

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select, iframe';

export default function CustomCursorContainer() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const glowX = useSpring(x, { damping: 25, stiffness: 200, mass: 0.6 });
  const glowY = useSpring(y, { damping: 25, stiffness: 200, mass: 0.6 });

  useEffect(() => {
    const pointerMql = window.matchMedia('(pointer: fine) and (hover: hover)');
    const reduceMql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setEnabled(pointerMql.matches && !reduceMql.matches);
    update();
    pointerMql.addEventListener('change', update);
    reduceMql.addEventListener('change', update);
    return () => {
      pointerMql.removeEventListener('change', update);
      reduceMql.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove('custom-cursor-active');
      return undefined;
    }

    document.documentElement.classList.add('custom-cursor-active');

    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const handleOver = (e) => {
      setHovering(!!e.target.closest?.(INTERACTIVE_SELECTOR));
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleOver);
    document.documentElement.addEventListener('mouseleave', handleLeave);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return <CustomCursor x={x} y={y} glowX={glowX} glowY={glowY} hovering={hovering} visible={visible} />;
}
