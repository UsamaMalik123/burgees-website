import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { RevealItem } from './Section.jsx';
import { VolumeOffIcon, VolumeOnIcon } from './icons.jsx';

export default function VideoReel({ src, label }) {
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const inView = useInView(wrapperRef, { margin: '-10% 0px -10% 0px' });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (inView && !reduceMotion) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, reduceMotion]);

  return (
    <RevealItem
      ref={wrapperRef}
      className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-ink-50/10 bg-ink-800 cursor-pointer"
      onClick={() => setMuted((m) => !m)}
    >
      <video
        ref={videoRef}
        src={src}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/5 to-transparent pointer-events-none" />
      <span className="absolute bottom-4 left-4 text-sm text-ink-50 font-body">{label}</span>
      <span className="absolute top-3 right-3 h-9 w-9 rounded-full bg-ink-900/70 backdrop-blur-sm border border-ink-50/15 flex items-center justify-center text-ink-50">
        {muted ? <VolumeOffIcon /> : <VolumeOnIcon />}
      </span>
    </RevealItem>
  );
}
