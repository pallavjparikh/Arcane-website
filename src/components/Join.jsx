import React from 'react';

// CSS
import "../styles/Join.css";

function Join() {
    return (
        <div className='Block joinBlock' id='join'>
            <center><p className='subHead' style={{ position: "relative", zIndex: 2 }}></p></center>
            <center><p className="heading" style={{ position: "relative", zIndex: 2 }}>Get Started Today <br /><span style={{ color: "#ffffffb3" }}></span></p></center>

                  
            {/* <iframe className='joinBlock' 
                src='https://forms.zohopublic.com/pallavthear1/form/ContactUS/formperma/6d1VdF1DMut7JWgRmVHic_kVY8G_BWj__KmElql28tc'
                width="80%" 
                align="center"
                height="500px" 
                style={{ border: "none", marginTop: "20px" }}
                title="Join Form"
            ></iframe> */}
        </div>
    )
}

export default Join