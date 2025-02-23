import React from 'react';

// CSS
import "../styles/Hero.css";

function Hero() {
  let span = {
    fontSize: 16,
    fontWeight: 550
  }

  return (
    <div className="heroBlock" style={{ position: "relative" }}>
      <div className='Hero'>
        <center><p className='subHead'>Transforming Data into Security and Insight</p></center>
        <center><p className="heading">Data Intelligence & Network Protection</p></center>
        <center>
          <p className="desc">Build custom AI solutions and protect your network from threats – no coding required. Arcane AI puts the power of data intelligence and AI-driven security in your hands</p>
        </center>
        <div className="links">
          <a href="#join" className="wait">Request a Consultation</a>
          {/* <a href="https://www.gitbook.com/" target='_blank' className="wait">See docs</a> */}
        </div>

        <center>
          <div className="heroImg">
            <img src="/hero/3.1.jpg" alt="image" height={500} width={800}/>
          </div>
        </center>

        <div className="logos" style={{ zIndex: 1, position: "relative" }}>
          <center><span style={span}>Used by great teams</span></center>
          <div>
            <img src="/hero/l1.svg" alt="image" />
            <img src="/hero/l2.svg" alt="image" />
            <img src="/hero/l3.svg" alt="image" />
            <img src="/hero/l4.svg" alt="image" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero