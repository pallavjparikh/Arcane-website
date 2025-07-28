import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      {/* Modern gradient background */}
      <div className="gradient-bg"></div>
      
      {/* AI Network Grid */}
      <div className="ai-grid">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="grid-node"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating AI Elements */}
      <div className="ai-elements">
        <motion.div
          className="ai-element element-1"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="element-inner"></div>
        </motion.div>

        <motion.div
          className="ai-element element-2"
          animate={{
            y: [0, 25, 0],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="element-inner"></div>
        </motion.div>

        <motion.div
          className="ai-element element-3"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="element-inner"></div>
        </motion.div>

        <motion.div
          className="ai-element element-4"
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, -90, -180],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="element-inner"></div>
        </motion.div>
      </div>

      {/* Data Stream Lines */}
      <div className="data-streams">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="data-stream"
            initial={{ x: -100, opacity: 0 }}
            animate={{ 
              x: window.innerWidth + 100,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Pulse Rings */}
      <div className="pulse-rings">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="pulse-ring"
            animate={{
              scale: [0, 2, 0],
              opacity: [0.8, 0, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground; 