import Section, { Reveal, RevealGroup, RevealItem } from './Section.jsx';
import SectionHeading from './SectionHeading.jsx';
import VideoReel from './VideoReel.jsx';
import { FlameIcon, StarIcon, LeafIcon } from './icons.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { restaurant } from '../data/restaurant.js';
import interiorPhoto from '../assets/images/interior.jpg';
import reelHero from '../assets/videos/reel-hero.mp4';
import reelOrder from '../assets/videos/reel-order.mp4';
import reelVibe from '../assets/videos/reel-vibe.mp4';

const pointIcons = [FlameIcon, StarIcon, LeafIcon];

export default function Vibe() {
  const { t } = useLanguage();
  const tags = [...restaurant.hashtags, ...restaurant.hashtags];
  const reels = [reelHero, reelOrder, reelVibe];

  return (
    <Section id="vibe" dark={false} className="!px-0 md:!px-0">
      <div className="px-5 sm:px-6 md:px-10 mx-auto max-w-content">
        <SectionHeading eyebrow={t.vibe.eyebrow} title={t.vibe.title} description={t.vibe.description} align="center" />
      </div>

      <div className="px-5 sm:px-6 md:px-10 mx-auto max-w-content mt-10">
        <RevealGroup className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5" stagger={0.08}>
          <RevealItem className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-ink-50/10">
            <img src={interiorPhoto} alt="Innenansicht Burgees Smashburger Berlin" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/5 to-transparent pointer-events-none" />
            <span className="absolute bottom-4 left-4 text-sm text-ink-50 font-body">{t.vibe.photoLabel}</span>
          </RevealItem>
          {reels.map((src, i) => (
            <VideoReel key={src} src={src} label={t.vibe.reelLabels[i]} />
          ))}
        </RevealGroup>
        <p className="text-center text-ink-500 text-xs mt-4 md:hidden">{t.vibe.galleryHint}</p>
      </div>

      <Reveal delay={0.15} className="mt-12 overflow-hidden border-y border-pink/15 bg-ink-900/40 py-4">
        <div className="flex w-max marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 pr-8" aria-hidden={dup === 1}>
              {tags.map((tag, i) => (
                <span
                  key={`${dup}-${tag}-${i}`}
                  className="text-sm md:text-base tracking-[0.15em] uppercase text-ink-300 whitespace-nowrap"
                >
                  {tag} <span className="text-pink mx-2">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </Reveal>

      <div className="px-5 sm:px-6 md:px-10 mx-auto max-w-content mt-14">
        <RevealGroup className="grid sm:grid-cols-3 gap-6" stagger={0.1}>
          {t.vibe.points.map((point, i) => {
            const Icon = pointIcons[i];
            return (
              <RevealItem
                key={point.title}
                className="flex flex-col items-center text-center gap-4 bg-ink-900 border border-ink-50/10 rounded-2xl px-6 py-8"
              >
                <span className="flex items-center justify-center h-12 w-12 rounded-full border border-pink/40 text-pink">
                  <Icon />
                </span>
                <h3 className="font-body font-medium text-ink-50">{point.title}</h3>
                <p className="text-ink-300 text-sm leading-relaxed">{point.desc}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </Section>
  );
}
