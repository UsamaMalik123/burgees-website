import { useEffect, useState } from 'react';
import FeaturedMenu from '../components/FeaturedMenu.jsx';
import MenuModal from '../components/MenuModal.jsx';
import { featuredItems, menuCategories } from '../data/menu.js';

export default function MenuContainer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <FeaturedMenu items={featuredItems} onOpenFullMenu={() => setOpen(true)} />
      <MenuModal open={open} onClose={() => setOpen(false)} categories={menuCategories} />
    </>
  );
}
