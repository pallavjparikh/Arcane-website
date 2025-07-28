import React from "react";
import { motion } from "framer-motion";
import useTeam from "../hooks/useTeam";

// CSS
import "../styles/Team.css";

// Boxicons
import "boxicons";

function Team() {
    const teamMembers = useTeam(); 

    // Simplified animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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

    const memberVariants = {
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

    const socialVariants = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section className="Block teamBlock" id="team">
            <motion.header
                variants={headerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <h2 className="subHead">Team</h2>
                <h3 className="heading blockHeading">Meet our team</h3>
                <p className="desc blockDesc">
                    Behind every feature and innovation is a passionate team committed to delivering the best. 
                    We are dedicated to constantly improving our product to meet your needs and exceed your expectations.
                </p>
            </motion.header>

            <motion.div 
                className="team" 
                role="list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {teamMembers.map((member, index) => (
                    <motion.article 
                        className="member" 
                        key={index} 
                        role="listitem"
                        variants={memberVariants}
                        whileHover={{ 
                            y: -8,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <motion.img 
                            src={member.image} 
                            alt={`${member.name} - ${member.role} at Arcane AI`}
                            whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                        />
                        <h4 style={{ fontSize: 18, fontWeight: 550 }}>
                            {member.name}
                        </h4>
                        <p style={{ color: "#ffffffb3", marginTop: 7 }}>
                            {member.role}
                        </p>
                        <motion.nav 
                            className="socials" 
                            aria-label={`${member.name}'s social media links`}
                        >
                            <motion.a 
                                href={member.linkedin} 
                                aria-label={`${member.name}'s LinkedIn profile`}
                                variants={socialVariants}
                                whileHover="hover"
                                whileTap={{ scale: 0.9 }}
                            >
                                <box-icon type="logo" color="white" name="linkedin-square"></box-icon>
                            </motion.a>
                            <motion.a 
                                href={member.twitter} 
                                aria-label={`${member.name}'s Twitter profile`}
                                variants={socialVariants}
                                whileHover="hover"
                                whileTap={{ scale: 0.9 }}
                            >
                                <box-icon name="twitter" type="logo" color="white"></box-icon>
                            </motion.a>
                        </motion.nav>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
}

export default Team;