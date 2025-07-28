import './App.css';
import { BrowserRouter as Router, Link} from "react-router-dom";

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
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// CSS
import './styles/LoadingScreen.css';

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const sidebarFunc = () => { setSidebar(!sidebar) }

  const [scrolled, setScrolled] = useState(false);
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
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
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
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <motion.div 
        className="App"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
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

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Hero />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Features />
        </motion.section>

        {/* <Solutions /> */}

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Team />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Faq />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Join />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Footer />
        </motion.section>
      </motion.div>
    </>
  )
}

export default App