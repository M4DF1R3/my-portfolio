import React from "react";
import "./Navbar.scss";

function Navbar() {
    return (
        <header className="header">
            <nav>
                <h2 className="my-name">Cheng Qian</h2>
                <a href="#home" className="my-home">
                    Home
                </a>
                <a href="#about" className="my-about">
                    About
                </a>
                <a href="#projects" className="my-projects">
                    Projects
                </a>
                <a href="#skills" className="my-skills">
                    Skills
                </a>
            </nav>
            <a href="#contact" className="my-contact">
                Contact Me
            </a>
        </header>
    );
}

export default Navbar;