import React from "react";
import { TypeAnimation } from 'react-type-animation';
import "./About.scss";

function About() {
    return (
        <section id="about">
        <div className="about-container">
            <div className="about-section">
                Hi, I'm Kevin.
                <br />
                <span>I am a</span>{' '}
                    <TypeAnimation // Typewriter effect
                    sequence={[
                    'Web Developer', // Types 'Web Developer'
                    1000, // Waits 1s
                    'Aspiring Software Engineer', // Deletes 'Web Developer' and types 'Software Engineer'
                    1000, // Waits 1s
                    'Programmer', // Deletes 'Web Developer' and types 'Software Engineer'
                    1000, // Waits 1s
                    ]}
                    wrapper="span"
                    repeat={Infinity}
                    style={{ fontSize: '0.9em', display: 'inline-block' }}
                    />
            </div>
            <button></button>
            <div className="template">
            <img
                className="portrait"
                alt="myself"
                src="./programmer-icon.png"
            />
            </div>
        </div>
        </section>
        
    );
}

export default About;