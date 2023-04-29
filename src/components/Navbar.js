import React from "react";
import "./Navbar.scss";
import { FaHome, FaUserAlt, FaRocket } from "react-icons/fa";


function Navbar() {
    return (
        <header className="header">
            <nav>
                <h2 className="my-name">Cheng Qian</h2>
                <a href="/" className="my-home">
                    <FaHome style={{ marginTop: "2px", marginRight: "5px" }} /> Home
                </a>
                <a href="about" className="my-about">
                    <FaUserAlt style={{ marginTop: "2px", marginRight: "5px" }} /> About
                </a>
                <a href="projects" className="my-projects">
                    <FaRocket style={{ marginTop: "2px", marginRight: "5px" }} /> Projects
                </a>
            </nav>
            <a href="#contact" className="my-contact">
                Contact Me
            </a>
        </header>
    );
}

export default Navbar;