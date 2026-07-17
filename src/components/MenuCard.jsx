import { motion, useReducedMotion } from 'framer-motion';
import { RevealItem } from './Section.jsx';
import { FlameIcon, LeafIcon } from './icons.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function MenuCard({ item }) {
  const { lang, t } = useLanguage();
  const desc = lang === 'de' ? item.descDe : item.descEn;
  const reduceMotion = useReducedMotion();

  return (
    <RevealItem className="border-b border-ink-50/10 py-6 first:pt-0 last:border-0">
      <motion.button
        type="button"
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="group w-full flex items-start gap-4 sm:gap-5 text-left cursor-pointer rounded-xl -mx-2 px-2 py-1 transition-colors duration-200 hover:bg-ink-800/40 focus-visible:bg-ink-800/40"
      >
        {item.photo && (
          <motion.div
            whileHover={
              reduceMotion ? undefined : { scale: 1.22, zIndex: 30, boxShadow: '0 25px 40px -12px rgba(0,0,0,0.6)' }
            }
            whileTap={
              reduceMotion ? undefined : { scale: 1.1, boxShadow: '0 0 0 4px rgba(255,79,195,0.55)' }
            }
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative shrink-0 h-20 w-20 sm:h-24 sm:w-24 rounded-xl overflow-hidden border border-ink-50/10 bg-ink-800"
          >
            <img src={item.photo} alt={item.name} loading="lazy" className="h-full w-full object-cover" />
          </motion.div>
        )}

        <div className="min-w-0 flex-1 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
              {item.rank && (
                <span className="text-[10px] tracking-[0.2em] uppercase text-pink font-medium">
                  {t.menu.mostPopular(item.rank)}
                </span>
              )}
              {item.tag === 'vegan' && (
                <span className="inline-flex items-center gap-1 text-[10px] tracking-[0.15em] uppercase text-ink-200">
                  <LeafIcon width={12} height={12} /> {t.menu.tagVegan}
                </span>
              )}
              {item.tag === 'spicy' && (
                <span className="inline-flex items-center gap-1 text-[10px] tracking-[0.15em] uppercase text-ink-200">
                  <FlameIcon width={12} height={12} /> {t.menu.tagSpicy}
                </span>
              )}
            </div>
            <h3 className="font-display text-xl md:text-2xl text-ink-50 group-hover:text-pink transition-colors duration-300">
              {item.name}
            </h3>
            <p className="text-ink-300 text-sm mt-1.5 leading-relaxed max-w-md">{desc}</p>
          </div>
          <div className="shrink-0 text-right tabular">
            {item.originalPrice && (
              <div className="text-xs text-ink-300 line-through">{item.originalPrice} €</div>
            )}
            <div className="font-display text-lg md:text-xl text-pink">{item.price} €</div>
          </div>
        </div>
      </motion.button>
    </RevealItem>
  );
}
