import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";

// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Features from './components/Features';
//import Solutions from './components/Solutions';
import Team from './components/Team';
import Faq from './components/Faq';
import Join from './components/Join';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import MathGrid from './components/MathGrid';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// CSS
import './styles/LoadingScreen.css';

// Scroll to section function
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Main App Content Component
function AppContent({ sidebar, setSidebar, scrolled, setScrolled }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle hash navigation
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  }, [location]);

  const sidebarFunc = () => { setSidebar(!sidebar) };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrolled]);

  const handleLoadingComplete = () => {
    // Loading is handled by parent component
  };

  // Simplified animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Math Grid Background */}
      <MathGrid />
      
      {/* Always visible navbar with enhanced styling when scrolled */}
      <motion.div 
        className={`Navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          backgroundColor: scrolled ? 'rgba(15, 13, 18, 0.95)' : 'rgba(15, 13, 18, 0.8)',
          backdropFilter: scrolled ? 'blur(15px)' : 'blur(10px)',
          borderBottom: scrolled ? '1px solid rgba(153, 138, 251, 0.3)' : '1px solid rgba(153, 138, 251, 0.1)'
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Navbar click={sidebarFunc} />
      </motion.div>
      
      <AnimatePresence>
        {sidebar && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Sidebar effect={sidebar} click={sidebarFunc} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main>
        <motion.section
          id="hero"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Hero />
        </motion.section>

        <motion.section
          id="features"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Features />
        </motion.section>

        <motion.section
          id="team"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Team />
        </motion.section>

        <motion.section
          id="faq"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Faq />
        </motion.section>

        <motion.section
          id="join"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Join />
        </motion.section>
      </main>

      <Footer />
    </motion.div>
  );
}

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <AppContent 
            sidebar={sidebar} 
            setSidebar={setSidebar} 
            scrolled={scrolled} 
            setScrolled={setScrolled} 
          />
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;