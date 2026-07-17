import NavbarContainer from './containers/NavbarContainer.jsx';
import HeroContainer from './containers/HeroContainer.jsx';
import MenuContainer from './containers/MenuContainer.jsx';
import Story from './components/Story.jsx';
import Vibe from './components/Vibe.jsx';
import Reviews from './components/Reviews.jsx';
import Reserve from './components/Reserve.jsx';
import Location from './components/Location.jsx';
import Footer from './components/Footer.jsx';
import CustomCursorContainer from './containers/CustomCursorContainer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-900">
      <CustomCursorContainer />
      <NavbarContainer />
      <main>
        <HeroContainer />
        <MenuContainer />
        <Story />
        <Vibe />
        <Reviews />
        <Reserve />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
