import React from 'react';
import { motion } from 'framer-motion';
import useFeatures from '../hooks/useFeatures';
import "../styles/Features.css";
import { twMerge } from "tailwind-merge";

function Features() {
    const features = useFeatures();

    // Simplified animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const headerVariants = {
        hidden: { 
            opacity: 0, 
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const featureVariants = {
        hidden: { 
            opacity: 0, 
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.02,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section className='Block featuresBlock' id='features'>
            <motion.header
                variants={headerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <h2 className='subHead'>Features</h2>
                <h3 className="heading blockHeading">It's packed with all you need</h3>
                <p className="desc blockDesc">
                    Discover how Arcane AI simplifies custom AI development and strengthens your network security. 
                    Build tailored solutions and protect your data – all in one platform. 
                    Explore how we help you achieve more with ease.
                </p>
            </motion.header>

            <motion.div 
                className="features" 
                role="list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {features.map((feature, index) => (
                    <motion.article 
                        className="feature fadeIn" 
                        key={index} 
                        role="listitem"
                        variants={featureVariants}
                        whileHover={{ 
                            y: -5,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <div className="feature-content">
                            <h4 className="featureHead">
                                {feature.title}
                            </h4>
                            <p className="featureDesc">
                                {feature.description}
                            </p>
                        </div>
                        <motion.div 
                            className="featureImg"
                            variants={imageVariants}
                            whileHover="hover"
                        >
                            <img 
                                src={feature.image} 
                                alt={`${feature.title} - Arcane AI feature`} 
                                style={{ width: "100%" }} 
                            />
                        </motion.div>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
}

export default Features;