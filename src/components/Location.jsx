import Section, { Reveal, RevealPhoto } from './Section.jsx';
import SectionHeading from './SectionHeading.jsx';
import { PinIcon, ClockIcon, PhoneIcon } from './icons.jsx';
import { restaurant } from '../data/restaurant.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

// Keyless embed pinned to the business's exact Google Place ID (found on their live site) —
// intentionally not using their embedded API key, since that's tied to their own billing/referrer restrictions.
const mapSrc = 'https://www.google.com/maps?q=place_id:ChIJb60rAYFPqEcRH3gYTvsYkp4&z=16&output=embed';

export default function Location() {
  const { t } = useLanguage();

  return (
    <Section id="standort">
      <SectionHeading eyebrow={t.location.eyebrow} title={t.location.title} />

      <div className="mt-10 grid lg:grid-cols-2 gap-8 items-stretch">
        <RevealPhoto className="rounded-2xl overflow-hidden border border-ink-50/10 min-h-[280px] sm:min-h-[320px]">
          <iframe
            title="Burgees Smashburger Standort"
            src={mapSrc}
            className="w-full h-full min-h-[280px] sm:min-h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </RevealPhoto>

        <Reveal delay={0.18} className="flex flex-col gap-8 bg-ink-800 border border-ink-50/10 rounded-2xl p-6 sm:p-8 md:p-10">
          <div className="flex items-start gap-4">
            <span className="flex items-center justify-center h-11 w-11 rounded-full border border-pink/40 text-pink shrink-0">
              <PinIcon />
            </span>
            <div>
              <h3 className="font-body font-medium text-ink-50">{t.location.addressLabel}</h3>
              <p className="text-ink-300 text-sm mt-1">
                {restaurant.address.street}
                <br />
                {restaurant.address.zip} {restaurant.address.city}
              </p>
              <a
                href={restaurant.address.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink text-sm mt-2 inline-block hover:underline cursor-pointer"
              >
                {t.location.routeCta}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex items-center justify-center h-11 w-11 rounded-full border border-pink/40 text-pink shrink-0">
              <PhoneIcon />
            </span>
            <div>
              <h3 className="font-body font-medium text-ink-50">{t.location.contactLabel}</h3>
              <a href={restaurant.phoneHref} className="text-ink-300 text-sm mt-1 hover:text-pink cursor-pointer">
                {restaurant.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex items-center justify-center h-11 w-11 rounded-full border border-pink/40 text-pink shrink-0">
              <ClockIcon />
            </span>
            <div className="w-full">
              <h3 className="font-body font-medium text-ink-50 mb-2">{t.location.hoursLabel}</h3>
              <dl className="grid grid-cols-[1fr_auto] gap-y-1.5 text-sm">
                {restaurant.hours.map((h, i) => (
                  <div key={t.location.days[i]} className="contents">
                    <dt className="text-ink-300">{t.location.days[i]}</dt>
                    <dd className="text-ink-100 tabular">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
