import './styles/App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Hero from './components/Hero';
import About from './components/About';
import ThemeSwitch from './components/ThemeSwitch';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import { useTheme } from './context/ThemeContext';
import LanguageSwitch from './components/LanguageSwitch';

function App() {
  const theme = useTheme();

  if (typeof window === 'undefined' || !window.document) {
    return null;
  }
  return (
    <>
      <div className={theme ? 'theme-dark' : 'theme-light'}>
        {/* <motion.div
        className="background"
        style={{ transform: `translateY(${offsetY * 0.6}px)` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      ></motion.div> */}
        {/* <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.6 }}
        transition={{ ease: 'easeOut', duration: 3 }}
        className="background-static-noise"
      ></motion.div> */}

        <Header />
        <Home />
        <LanguageSwitch />
        <ThemeSwitch />
        <About />
        <Hero />
        <Contact />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
