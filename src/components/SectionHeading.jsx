import { Reveal } from './Section.jsx';

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <Reveal className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-3 text-xs md:text-sm tracking-[0.3em] uppercase text-pink font-body font-medium">
          <span className="h-px w-8 bg-pink/70" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl leading-[1.1] text-balance text-ink-50 font-display font-medium">
        {title}
      </h2>
      {description && (
        <p className="text-ink-200 text-base md:text-lg leading-relaxed font-body">{description}</p>
      )}
    </Reveal>
  );
}
