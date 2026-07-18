import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CloseIcon, FlameIcon, LeafIcon } from './icons.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function MenuModal({ open, onClose, categories }) {
  const { lang, t } = useLanguage();
  const [activeId, setActiveId] = useState(categories[0]?.id);
  const dialogRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    dialogRef.current?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6"
      style={{ pointerEvents: open ? 'auto' : 'none' }}
      aria-hidden={!open}
    >
      <motion.div
        className="absolute inset-0 bg-ink-900/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
        initial={false}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      />

      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={t.menu.modalTitle}
        tabIndex={-1}
        initial={false}
        animate={open ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full sm:max-w-3xl h-[92dvh] sm:h-[85dvh] bg-ink-800 border border-ink-50/10 sm:rounded-3xl rounded-t-3xl shadow-2xl flex flex-col overflow-hidden outline-none"
      >
        <div className="flex items-center justify-between px-5 sm:px-6 md:px-8 py-5 border-b border-ink-50/10 shrink-0">
          <h2 className="font-display text-xl sm:text-2xl text-ink-50">
            {t.menu.modalTitle} <span className="text-pink">Burgees</span>
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-ink-200 hover:text-pink p-2.5 -mr-2.5 cursor-pointer"
            aria-label={t.menu.close}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex gap-2 px-5 sm:px-6 md:px-8 py-4 overflow-x-auto shrink-0 border-b border-ink-50/10">
          {categories.map((c) => (
            <motion.button
              key={c.id}
              type="button"
              onClick={() => setActiveId(c.id)}
              whileTap={reduceMotion ? undefined : { scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className={`shrink-0 min-h-11 px-4 rounded-full text-xs tracking-[0.1em] uppercase transition-colors duration-200 cursor-pointer border ${
                c.id === activeId
                  ? 'bg-pink text-ink-900 border-pink'
                  : 'text-ink-200 border-ink-50/15 hover:border-pink/60 hover:text-pink'
              }`}
            >
              {lang === 'de' ? c.labelDe : c.labelEn}
            </motion.button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto px-5 sm:px-6 md:px-8 py-6">
          <ul className="flex flex-col divide-y divide-ink-50/10">
            {active.items.map((item) => (
              <li key={item.id}>
                <motion.button
                  type="button"
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="w-full py-4 flex items-start gap-3 text-left cursor-pointer rounded-xl -mx-2 px-2 transition-colors duration-200 hover:bg-ink-900/40 focus-visible:bg-ink-900/40"
                >
                  {item.photo && (
                    <motion.img
                      src={item.photo}
                      alt={item.name}
                      loading="lazy"
                      whileHover={
                        reduceMotion
                          ? undefined
                          : { scale: 1.6, zIndex: 30, boxShadow: '0 20px 35px -10px rgba(0,0,0,0.6)' }
                      }
                      whileTap={
                        reduceMotion ? undefined : { scale: 1.4, boxShadow: '0 0 0 4px rgba(255,79,195,0.55)' }
                      }
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="relative shrink-0 h-14 w-14 rounded-lg object-cover border border-ink-50/10 bg-ink-800"
                    />
                  )}
                  <div className="min-w-0 flex-1 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="font-body text-base text-ink-50">{item.name}</span>
                        {item.tag === 'vegan' && <LeafIcon width={14} height={14} className="text-ink-300" />}
                        {item.tag === 'spicy' && <FlameIcon width={14} height={14} className="text-ink-300" />}
                      </div>
                      {(item.descDe || item.descEn) && (
                        <p className="text-ink-300 text-xs mt-1 leading-relaxed max-w-sm">
                          {lang === 'de' ? item.descDe : item.descEn}
                        </p>
                      )}
                    </div>
                    <span className="shrink-0 tabular text-pink font-medium text-sm">{item.price} €</span>
                  </div>
                </motion.button>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-5 sm:px-6 md:px-8 py-4 border-t border-ink-50/10 shrink-0 bg-ink-800/95">
          <p className="text-xs text-ink-300 text-center">{t.menu.modalNote}</p>
        </div>
      </motion.div>
    </div>
  );
}
