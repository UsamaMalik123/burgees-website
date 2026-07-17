import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from './Button.jsx';
import { FlameIcon, LeafIcon, StarIcon } from './icons.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import heroPoster from '../assets/images/hero-food-wide.jpg';
import heroVideo from '../assets/videos/reel-hero.mp4';

const easeOut = [0.16, 1, 0.3, 1];

export default function Hero({ reduceMotion }) {
  const { t } = useLanguage();
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;
    video.play().catch(() => {});
  }, [reduceMotion]);

  return (
    <div id="top" className="relative min-h-[100dvh] flex items-end overflow-hidden bg-ink-900">
      <div className="absolute inset-0">
        {reduceMotion ? (
          <img
            src={heroPoster}
            alt="Frisch gesmashter Burgees Burger mit Pommes"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        ) : (
          <video
            ref={videoRef}
            src={heroVideo}
            poster={heroPoster}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            aria-label="Burgees Smashburger wird auf der Platte gegrillt"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/70 to-ink-900/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/80 via-transparent to-ink-900/40" />
      </div>

      <div className="grain-overlay absolute inset-0 pointer-events-none" />

      <div className="relative z-10 w-full mx-auto max-w-content px-5 sm:px-6 md:px-10 pb-14 sm:pb-16 md:pb-24 pt-32 sm:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-6"
        >
          <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs tracking-[0.25em] uppercase text-pink font-medium">
            <FlameIcon /> {t.hero.badgeHalal}
          </span>
          <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs tracking-[0.25em] uppercase text-ink-100">
            <LeafIcon /> {t.hero.badgeFresh}
          </span>
          <span className="inline-flex items-center gap-1 text-xs tracking-[0.25em] uppercase text-ink-100">
            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
          </span>
        </motion.div>

        <h1 className="font-display text-[15vw] sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.95] text-ink-50 font-medium mb-6">
          {t.hero.headline.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: easeOut }}
              className={`block ${i === 1 ? 'text-pink' : ''}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: easeOut }}
          className="max-w-md text-ink-200 text-base md:text-lg leading-relaxed mb-10 font-body text-balance"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: easeOut }}
          className="flex flex-wrap items-center gap-4"
        >
          <Button as="a" href="#speisekarte">
            {t.hero.ctaMenu}
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="hidden md:flex absolute bottom-8 right-8 z-10 flex-col items-center gap-2 text-ink-200"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase [writing-mode:vertical-rl]">{t.hero.scroll}</span>
        <span className="h-10 w-px bg-gradient-to-b from-pink to-transparent" />
      </motion.div>
    </div>
  );
}
