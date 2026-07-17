const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const MenuIcon = (p) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...p}>
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="17" x2="20" y2="17" />
  </svg>
);

export const CloseIcon = (p) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...p}>
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
  </svg>
);

export const PhoneIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 2 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const PinIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.3" />
  </svg>
);

export const ClockIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
);

export const ArrowRightIcon = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <line x1="4" y1="12" x2="20" y2="12" />
    <path d="M14 6l6 6-6 6" />
  </svg>
);

export const PlayIcon = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" {...p}>
    <path d="M8 5.5v13l11-6.5-11-6.5Z" />
  </svg>
);

export const InstagramIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const TikTokIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <path d="M14 4v9.5a3.5 3.5 0 1 1-3-3.46" />
    <path d="M14 4c.6 2.4 2.3 4 5 4.2" />
  </svg>
);

export const StarIcon = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...p}>
    <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6-5.9-3.3-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8L12 2.5Z" />
  </svg>
);

export const FlameIcon = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <path d="M12 21c4 0 6.5-2.6 6.5-6 0-3-2-4.8-2.9-7-1 2-1.9 2.6-2.9 1.8C13.5 7 13.9 4.5 12 2c-.3 3.6-2.3 5.3-4 7.3-1.4 1.6-2.5 3.3-2.5 5.7 0 3.4 2.5 6 6.5 6Z" />
  </svg>
);

export const LeafIcon = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14Z" />
    <path d="M5 19c0-5 2-9 6-11" />
  </svg>
);

export const GlobeIcon = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
  </svg>
);

export const StarFilledIcon = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...p}>
    <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6-5.9-3.3-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8L12 2.5Z" />
  </svg>
);

export const VolumeOffIcon = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <path d="M4 9v6h4l5 4V5L8 9H4Z" />
    <line x1="15.5" y1="9.5" x2="20.5" y2="14.5" />
    <line x1="20.5" y1="9.5" x2="15.5" y2="14.5" />
  </svg>
);

export const VolumeOnIcon = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <path d="M4 9v6h4l5 4V5L8 9H4Z" />
    <path d="M16.5 9a5 5 0 0 1 0 6" />
    <path d="M18.8 6.7a8.5 8.5 0 0 1 0 10.6" />
  </svg>
);

export const QuoteIcon = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" {...p}>
    <path d="M7.2 11.5c-1.8 0-3.2-1.4-3.2-3.2C4 5.9 6 4 8.5 4v2.1c-1.3 0-2.4 1-2.4 2.2 0 .3.1.5.2.7.5-.2 1-.3 1.5-.3 1.6 0 2.9 1.2 2.9 2.9s-1.4 2.9-3.5 2.9c-.4 0 0 0 0 0Zm9.3 0c-1.8 0-3.2-1.4-3.2-3.2 0-2.4 2-4.3 4.5-4.3v2.1c-1.3 0-2.4 1-2.4 2.2 0 .3.1.5.2.7.5-.2 1-.3 1.5-.3 1.6 0 2.9 1.2 2.9 2.9s-1.4 2.9-3.5 2.9c-.4 0 0 0 0 0Z" />
  </svg>
);
