import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [currentText, setCurrentText] = useState(0);
  
  const loadingTexts = [
    "Initializing AI systems...",
    "Loading neural networks...",
    "Calibrating security protocols...",
    "Preparing data intelligence...",
    "System ready..."
  ];

  useEffect(() => {
    // Auto complete after 4 seconds
    const completionTimer = setTimeout(() => {
      onLoadingComplete();
    }, 4000);

    const textTimer = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 1500);

    return () => {
      clearTimeout(completionTimer);
      clearInterval(textTimer);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="loading-container">
        {/* Logo */}
        <motion.div
          className="logo-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="logo-text-container">
            <motion.img
              src="/logo.svg"
              alt="Arcane AI Logo"
              className="logo-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            
            {/* Scanning Light Effect */}
            <motion.div
              className="scanning-light"
              initial={{ x: -100, opacity: 0 }}
              animate={{ 
                x: [0, 400, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1.5,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>

        {/* Loading Text Only */}
        <motion.div
          className="loading-text-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.p
            className="loading-text"
            key={currentText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {loadingTexts[currentText]}
          </motion.p>
        </motion.div>

        {/* Floating Particles */}
        <div className="floating-particles">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 