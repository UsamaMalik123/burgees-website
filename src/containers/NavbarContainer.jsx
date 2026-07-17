import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';

export default function NavbarContainer() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <Navbar
      scrolled={scrolled}
      mobileOpen={mobileOpen}
      onToggleMobile={() => setMobileOpen((v) => !v)}
      onCloseMobile={() => setMobileOpen(false)}
    />
  );
}
