import { useReducedMotion } from 'framer-motion';
import Hero from '../components/Hero.jsx';

export default function HeroContainer() {
  const reduceMotion = useReducedMotion();

  return <Hero reduceMotion={reduceMotion} />;
}
