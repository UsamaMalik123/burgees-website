import logo from '../assets/images/logo.png';
import { InstagramIcon, TikTokIcon } from './icons.jsx';
import { restaurant } from '../data/restaurant.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { href: '#speisekarte', label: t.nav.menu },
    { href: '#story', label: t.nav.story },
    { href: '#vibe', label: t.nav.vibe },
    { href: '#bewertungen', label: t.nav.reviews },
    { href: '#standort', label: t.nav.location },
  ];

  return (
    <footer className="bg-ink-900 border-t border-ink-50/10 px-5 sm:px-6 md:px-10 py-14">
      <div className="mx-auto max-w-content grid gap-10 sm:grid-cols-3">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Burgees Smashburger Logo" className="h-9 w-auto rounded-full" />
            <span className="font-display text-ink-50">Burgees Smashburger</span>
          </div>
          <p className="text-xs text-ink-300 leading-relaxed max-w-[220px]">
            {restaurant.address.street}, {restaurant.address.zip} {restaurant.address.city}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs tracking-[0.2em] uppercase text-ink-300">{t.footer.quickLinks}</h3>
          <nav className="flex flex-col gap-2" aria-label="Footer Navigation">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-ink-200 hover:text-pink transition-colors duration-200 cursor-pointer">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs tracking-[0.2em] uppercase text-ink-300">{t.footer.followUs}</h3>
          <div className="flex items-center gap-3">
            <a
              href={restaurant.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Burgees auf Instagram"
              className="h-10 w-10 rounded-full border border-ink-50/15 flex items-center justify-center text-ink-200 hover:text-pink hover:border-pink/50 transition-colors duration-200 cursor-pointer"
            >
              <InstagramIcon />
            </a>
            <a
              href={restaurant.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Burgees auf TikTok"
              className="h-10 w-10 rounded-full border border-ink-50/15 flex items-center justify-center text-ink-200 hover:text-pink hover:border-pink/50 transition-colors duration-200 cursor-pointer"
            >
              <TikTokIcon />
            </a>
          </div>
          <a href={restaurant.phoneHref} className="text-sm text-ink-200 hover:text-pink cursor-pointer">
            {restaurant.phone}
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-content mt-10 pt-6 border-t border-ink-50/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-ink-500">
          © {new Date().getFullYear()} Burgees Smashburger. {t.footer.rightsReserved}
        </p>
      </div>
    </footer>
  );
}
