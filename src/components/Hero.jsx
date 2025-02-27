import React from 'react';
"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Globe } from "../magicui/globe";

const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});

// CSS
import "../styles/Hero.css";

function Hero() {
  let span = {
    fontSize: 16,
    fontWeight: 550
  }
  
  return (
    
    <div className="heroBlock"s style={{ position: "relative" }}>
      
      <div className='Hero'>
      <div className="globe relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
  
      </span>
      <Globe className="top-28 " />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
        <center><p className='subHead'>Transforming Data into Security and Insight</p></center>
        <center><p className="heading">Data Intelligence & Network Protection</p></center>
        
        <center>
          <p className="desc">Build custom AI solutions and protect your network from threats – no coding required. Arcane AI puts the power of data intelligence and AI-driven security in your hands</p>
        </center>
        <div className="links">
          <a href="#join" className="wait">Request a Consultation</a>
          {/* <a href="https://www.gitbook.com/" target='_blank' className="wait">See docs</a> */}
        </div>

        
        

        <div className="logos" style={{ zIndex: 1, position: "relative" }}>
          <center><span style={span}>Used by great teams</span></center>
          <div>
            <img src="src\assets\hero\cybrib.jpg" alt="image" />
            <img src="/src\assets\hero\cs.jpg" alt="image" />
            <img src="/src\assets\hero\gdg.webp" alt="image" />
            <img src="/src\assets\hero\ava.png"alt="image" />
          </div>
        </div>
      </div>

    </div>
    
  )
}

export default Hero