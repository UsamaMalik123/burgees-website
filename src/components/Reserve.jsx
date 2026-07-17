import Section, { Reveal } from './Section.jsx';
import Button from './Button.jsx';
import { PhoneIcon } from './icons.jsx';
import { restaurant } from '../data/restaurant.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Reserve() {
  const { t } = useLanguage();

  return (
    <Section id="bestellen" className="!py-0">
      <div className="relative overflow-hidden rounded-3xl border border-pink/20 bg-gradient-to-br from-violet/25 via-ink-800 to-ink-900 px-6 sm:px-8 md:px-16 py-14 sm:py-16 md:py-24 text-center">
        <div className="grain-overlay absolute inset-0 pointer-events-none" />
        <div className="relative mx-auto max-w-2xl flex flex-col items-center gap-6">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-pink">{t.reserve.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-ink-50 text-balance">
              {t.reserve.title}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-ink-200 text-base md:text-lg leading-relaxed max-w-lg">{t.reserve.description}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <Button as="a" href={restaurant.phoneHref}>
              <PhoneIcon width={16} height={16} /> {restaurant.phone}
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
