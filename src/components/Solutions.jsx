import React from 'react';
import useSolutions from '../hooks/useSolutions';

// CSS
import "../styles/Solutions.css";

function Solutions() {
    const solutions = useSolutions();

    return (
        <div className='Block solutionsBlock' id='solutions'>
            <div className="sectionHead">
                <p className='subHead'>Solutions</p>
                <p className="heading blockHeading" style={{ maxWidth: "420px" }}>There is something for every team</p>
                <p className="desc blockDesc" style={{ maxWidth: "520px" }}>Explore how Arcane AI empowers different teams within your organization, unlocking insights from data and strengthening security</p>
            </div>

            <div className="solutions">
                {solutions.map((solution, index) => (
                    <div className="solution" key={index}>
                        <img src={solution.img} alt={solution.title} style={{ width: "100%" }} />
                        <p className="featureHead solutionHead">{solution.title}</p>
                        <p className="featureDesc">{solution.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Solutions;