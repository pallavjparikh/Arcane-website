import React, { forwardRef, useRef } from "react";
"use client";
 

 
import { cn } from "../lib/utils"; 
import { AnimatedBeam } from "../magicui/animated-beam";
// CSS
import "../styles/Soon.css";

// Boxicons
import "boxicons";

function Soon() {
    return (
        <div className='Block'>
            <div className="sectionHead">
                <p className='subHead'>Comming Soon</p>
                <p className="heading blockHeading">24/7 AI-Powered Protection</p>
                <p className="desc" style={{ maxWidth: "635px" }}>Arcane AI constantly monitors your network, detecting and responding to threats in real-time. Protect your valuable data and minimize the risk of costly breaches.</p>
                {/* <div className="links soonLinks">
                    <a href="#" className="wait">Join waitlist</a>
                    <a href="https://www.gitbook.com/" target='_blank' className="wait">See docs</a>
                </div> */}

                <div className="heroImg soonImg">
                    <img src="..\hero\6.1.jpg" alt="image" />
                </div>

                <div className="soonGrid">
                    <div>
                        <box-icon name='check' color="white"></box-icon>
                        <p className='soonTitle'>Real-time updates</p>
                        <p style={{ color: "#ffffffb3", lineHeight: "1.45em", fontWeight: 500 }}>Get live progress updates to stay aligned and on schedule.</p>
                    </div>
                    <div>
                        <box-icon name='right-arrow-alt' color="white"></box-icon>
                        <p className='soonTitle'>Custom workflows</p>
                        <p style={{ color: "#ffffffb3", lineHeight: "1.45em", fontWeight: 500 }}>Tailor workflows to fit your team's unique project needs.</p>
                    </div>
                    <div>
                        <box-icon name='bolt-circle' color="white"></box-icon>
                        <p className='soonTitle'>Task assignment</p>
                        <p style={{ color: "#ffffffb3", lineHeight: "1.45em", fontWeight: 500 }}>Easily assign and track tasks with clear ownership.</p>
                    </div>
                    <div>
                        <box-icon name='lock' color="white"></box-icon>
                        <p className='soonTitle'>Enhanced security</p>
                        <p style={{ color: "#ffffffb3", lineHeight: "1.45em", fontWeight: 500 }}>Protect your project data with top-tier security features.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Soon