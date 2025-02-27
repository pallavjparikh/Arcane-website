import React from 'react';
import useFeatures from '../hooks/useFeatures';
import "../styles/Features.css";
import { twMerge } from "tailwind-merge";

function Features() {
    const features = useFeatures();

    return (
        <div className='Block featuresBlock' id='features'>
            <center><p className='subHead'>Features</p></center>
            <center><p className="heading blockHeading">It’s packed with all you need</p></center>
            <center>
                <p className="desc blockDesc">Discover how Arcane AI simplifies custom AI development and strengthens your network security. Build tailored solutions and protect your data – all in one platform. Explore how we help you achieve more with ease.</p>
            </center>

            <div className="features">
                {features.map((feature, index) => (
                    <div className="feature fadeIn" key={index}>
                        <div>
                            <p className="featureHead">{feature.title}</p>
                            <p className="featureDesc">{feature.description}</p>
                        </div>
                        <div className="featureImg">
                            <img src={feature.image} alt={feature.title} style={{ width: "100%" }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;