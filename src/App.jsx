import './App.css';
import { BrowserRouter as Router, Link} from "react-router-dom";



// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Soon from './components/Soon';
import Team from './components/Team';
import Faq from './components/Faq';
import Join from './components/Join';
import Footer from './components/Footer';
import CustomAiPage from './components/CustomAiPage';
import { useState, useEffect } from 'react';

function App() {
  const [sidebar, setSidebar] = useState(false);

  const sidebarFunc = () => { setSidebar(!sidebar) }

  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust scroll threshold as needed
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <div className={`Navbar ${showNavbar ? 'show' : ''}`}>
        <Navbar click={sidebarFunc} />
      </div>
      <Sidebar effect={sidebar} click={sidebarFunc} />
      <Hero />
      <Features />
      <Solutions />
      <Soon />
      <Team />
      <Faq />
      <Join />
      <Footer />
    </div>
  )
}

export default App