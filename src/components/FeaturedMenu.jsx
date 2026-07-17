import Section, { RevealGroup, Reveal, RevealPhoto } from './Section.jsx';
import SectionHeading from './SectionHeading.jsx';
import MenuCard from './MenuCard.jsx';
import Button from './Button.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import heroFoodPortrait from '../assets/images/hero-food-portrait.jpg';
import heroFoodWide from '../assets/images/hero-food-wide.jpg';

export default function FeaturedMenu({ items, onOpenFullMenu }) {
  const { t } = useLanguage();

  return (
    <Section id="speisekarte">
      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading eyebrow={t.menu.eyebrow} title={t.menu.title} description={t.menu.description} />

          <RevealPhoto delay={0.15} className="mt-8 hidden lg:block">
            <div className="relative grid grid-cols-5 gap-3">
              <div className="col-span-3 aspect-[4/5] rounded-2xl overflow-hidden border border-ink-50/10">
                <img src={heroFoodPortrait} alt="Frisch gesmashter Burgees Cheeseburger" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-2 aspect-[4/5] rounded-2xl overflow-hidden border border-ink-50/10 mt-8">
                <img src={heroFoodWide} alt="Burgees Burger mit zwei Portionen Pommes" className="w-full h-full object-cover" />
              </div>
            </div>
          </RevealPhoto>

          <Reveal delay={0.25} className="mt-10">
            <Button as="button" type="button" onClick={onOpenFullMenu}>
              {t.menu.fullMenuCta}
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="flex flex-col" stagger={0.07}>
          {items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
