import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { strings } from './strings.js';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'burgees-lang';

function detectInitialLang() {
  if (typeof window === 'undefined') return 'de';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'de' || stored === 'en') return stored;
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'de';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((l) => (l === 'de' ? 'en' : 'de')),
      t: strings[lang],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
