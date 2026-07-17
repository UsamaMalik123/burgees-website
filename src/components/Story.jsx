import Section, { RevealGroup, RevealItem, RevealPhoto } from './Section.jsx';
import SectionHeading from './SectionHeading.jsx';
import { FlameIcon, LeafIcon, StarIcon } from './icons.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import heroFood2 from '../assets/images/hero-food-2.jpg';

const pillarIcons = [FlameIcon, StarIcon, LeafIcon];

export default function Story() {
  const { t } = useLanguage();

  return (
    <Section id="story" dark={false}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <RevealPhoto className="order-2 lg:order-1 relative">
          <div className="relative rounded-2xl overflow-hidden border border-ink-50/10 aspect-[4/5] max-w-md mx-auto lg:mx-0">
            <img
              src={heroFood2}
              alt="Burgees Smashburger Ladenlokal in der Hermannstraße"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block absolute -bottom-8 -right-4 lg:right-4 bg-ink-900 border border-pink/40 rounded-2xl px-7 py-5 shadow-pink">
            <div className="font-display text-3xl text-pink">100%</div>
            <div className="text-xs tracking-[0.15em] uppercase text-ink-200 mt-1">{t.story.statLabel}</div>
          </div>
        </RevealPhoto>

        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow={t.story.eyebrow} title={t.story.title} description={t.story.description} />

          <RevealGroup className="mt-10 flex flex-col gap-6" stagger={0.1}>
            {t.story.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i];
              return (
                <RevealItem key={pillar.title} className="flex items-start gap-4">
                  <span className="flex items-center justify-center h-11 w-11 rounded-full border border-pink/40 text-pink shrink-0">
                    <Icon />
                  </span>
                  <div>
                    <h3 className="font-body font-medium text-ink-50 text-base">{pillar.title}</h3>
                    <p className="text-ink-300 text-sm mt-1 leading-relaxed">{pillar.desc}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </Section>
  );
}
