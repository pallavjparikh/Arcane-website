import React from 'react';
import { motion } from "framer-motion";

// CSS
import "../styles/Hero.css";

function Hero() {
  let span = {
    fontSize: 16,
    fontWeight: 550
  }

  // Super simplified animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 10
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const logoVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05 + 0.3,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };
  
  return (
    <section className="heroBlock" style={{ position: "relative" }}>
      <div className='Hero'>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content"
        >
          <header>
            <motion.h1 
              className="subHead"
              variants={itemVariants}
            >
              Transforming Data into Security and Insight
            </motion.h1>
            <motion.h2 
              className="heading"
              variants={itemVariants}
            >
              Data Intelligence & Network Protection
            </motion.h2>
          </header>
          
          <motion.p 
            className="desc"
            variants={itemVariants}
          >
            Build custom AI solutions and protect your network from threats – no coding required. 
            Arcane AI puts the power of data intelligence and AI-driven security in your hands
          </motion.p>
          
          <motion.nav 
            className="links"
            variants={itemVariants}
          >
            <motion.a 
              href="#join" 
              className="wait" 
              aria-label="Request a consultation for Arcane AI services"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Request a Consultation
            </motion.a>
          </motion.nav>
        </motion.div>

        <motion.div 
          className="logos" 
          style={{ zIndex: 1, position: "relative" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <motion.p 
            style={span}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.3 }}
          >
            Used by great teams
          </motion.p>
          <div className="partner-logos">
            {[
              { src: "/hero/cybrib.jpg", alt: "Cybrib - Arcane AI partner" },
              { src: "/hero/cs.jpg", alt: "CS - Arcane AI partner" },
              { src: "/hero/gdg.webp", alt: "GDG - Arcane AI partner" },
              { src: "/hero/ava.png", alt: "Ava - Arcane AI partner" }
            ].map((logo, index) => (
              <motion.img
                key={index}
                src={logo.src}
                alt={logo.alt}
                custom={index}
                variants={logoVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero