import Section, { RevealGroup, RevealItem } from './Section.jsx';
import SectionHeading from './SectionHeading.jsx';
import Button from './Button.jsx';
import { StarFilledIcon, QuoteIcon } from './icons.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { restaurant } from '../data/restaurant.js';

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function Reviews() {
  const { t } = useLanguage();

  return (
    <Section id="bewertungen">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <SectionHeading eyebrow={t.reviews.eyebrow} title={t.reviews.title} description={t.reviews.description} />
        <Button href={restaurant.googleReviewUrl} target="_blank" rel="noopener noreferrer" variant="outline" className="shrink-0">
          {t.reviews.googleCta}
        </Button>
      </div>

      <RevealGroup
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-5 -mx-5 pb-2 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 sm:overflow-visible sm:snap-none sm:px-0 sm:mx-0 sm:pb-0"
        stagger={0.08}
      >
        {t.reviews.list.map((review) => (
          <RevealItem
            key={review.name}
            className="relative flex flex-col gap-4 bg-ink-800 border border-ink-50/10 rounded-2xl p-6 shrink-0 w-[82%] snap-center sm:w-auto sm:shrink"
          >
            <QuoteIcon className="absolute top-5 right-5 text-pink/15" />
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center h-11 w-11 rounded-full bg-pink/15 text-pink font-body font-medium text-sm shrink-0">
                {initials(review.name)}
              </span>
              <div>
                <div className="text-ink-50 font-body font-medium text-sm">{review.name}</div>
                <div className="flex items-center gap-0.5 text-pink mt-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarFilledIcon
                      key={i}
                      width={13}
                      height={13}
                      className={i < review.rating ? 'text-pink' : 'text-ink-500'}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-ink-300 text-sm leading-relaxed">{review.text}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
