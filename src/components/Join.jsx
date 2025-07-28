import React from 'react';
import { motion } from 'framer-motion';

// CSS
import "../styles/Join.css";

function Join() {
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

    return (
        <section className='Block joinBlock' id='join'>
            <motion.header
                variants={headerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="join-header"
            >
                <h2 className='subHead'>Get Started</h2>
                <h3 className="heading blockHeading">Get Started Today</h3>
                <p className="desc blockDesc">
                    Ready to transform your business with AI-powered solutions? 
                    Contact us today and let's build something amazing together.
                </p>
            </motion.header>

            <motion.div 
                className="form-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <iframe 
                    className='contact-form' 
                    src='https://forms.zohopublic.com/pallavthear1/form/ContactUS/formperma/6d1VdF1DMut7JWgRmVHic_kVY8G_BWj__KmElql28tc'
                    title="Contact Form"
                />
            </motion.div>
        </section>
    );
}

export default Join;
