import { motion } from 'framer-motion';
import logo from '../assets/images/logo.png';
import { MenuIcon, CloseIcon, GlobeIcon } from './icons.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Navbar({ scrolled, mobileOpen, onToggleMobile, onCloseMobile }) {
  const { t, lang, toggleLang } = useLanguage();

  const links = [
    { href: '#speisekarte', label: t.nav.menu },
    { href: '#story', label: t.nav.story },
    { href: '#vibe', label: t.nav.vibe },
    { href: '#bewertungen', label: t.nav.reviews },
    { href: '#standort', label: t.nav.location },
  ];

  const headerBg = mobileOpen
    ? 'bg-ink-900 border-b border-ink-50/10 py-3'
    : scrolled
    ? 'bg-ink-900/85 backdrop-blur-md border-b border-ink-50/10 py-3'
    : 'bg-transparent py-5';

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="mx-auto max-w-content px-4 sm:px-6 md:px-10 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 shrink-0 min-h-11 -my-2 py-2" aria-label="Burgees Smashburger">
          <img src={logo} alt="Burgees Smashburger Logo" className="h-9 sm:h-10 md:h-11 w-auto rounded-full" />
          <span className="hidden sm:block font-display text-lg tracking-wide text-ink-50">
            Burgees<span className="text-pink"> Smashburger</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Hauptnavigation">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-ink-100 hover:text-pink transition-colors duration-200 cursor-pointer"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleLang}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs tracking-[0.1em] uppercase text-ink-100 hover:text-pink border border-ink-50/15 hover:border-pink/50 rounded-full px-3 py-2 transition-colors duration-200 cursor-pointer"
            aria-label={`Switch language, current: ${lang === 'de' ? 'Deutsch' : 'English'}`}
          >
            <GlobeIcon width={14} height={14} />
            {t.nav.langSwitch}
          </button>

          <button
            type="button"
            onClick={onToggleMobile}
            className="md:hidden text-ink-50 p-2.5 -mr-2.5 cursor-pointer"
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : -8 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: mobileOpen ? 'auto' : 'none' }}
        aria-hidden={!mobileOpen}
        className="md:hidden absolute top-full inset-x-0 max-h-[calc(100dvh-4.5rem)] overflow-y-auto bg-ink-900 border-b border-ink-50/10 shadow-2xl"
      >
        <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobile Navigation">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              tabIndex={mobileOpen ? 0 : -1}
              onClick={onCloseMobile}
              className="py-3.5 text-base text-ink-100 hover:text-pink border-b border-ink-50/5 cursor-pointer"
            >
              {l.label}
            </a>
          ))}

          <button
            type="button"
            onClick={toggleLang}
            tabIndex={mobileOpen ? 0 : -1}
            className="flex sm:hidden items-center gap-2 py-3.5 text-base text-ink-100 hover:text-pink cursor-pointer"
          >
            <GlobeIcon width={16} height={16} />
            {lang === 'de' ? 'English' : 'Deutsch'}
          </button>
        </nav>
      </motion.div>
    </header>
  );
}
