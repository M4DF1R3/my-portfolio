import React from "react";
import "./About.scss";
import Skills from "./Skills";
import Tools from "./Tools";
import { Row, Col } from "react-bootstrap";
import myImage from "../../assets/images/image.png";
import Tilt from "react-parallax-tilt";

function About() {
    return (
        <section>
            <div className="about">
                <div className="container">
                    <Row>
                        <Col lg={8} className="info-col">
                            <h1 className="about-header">About Me</h1>
                            <p className="about-p">
                                Hello everyone, my name is Kevin and I'm from Alberta, Canada. I just finished my second year of Software Engineering at the University of Alberta.
                                I'm passionate about software development and I'm always looking to learn new things.
                                I'm currently looking for a Summer 2023 internship.
                            </p>
                        </Col>
                        <Col lg={4} className="img-col">
                            <Tilt>
                                <img src={myImage} alt="Kevin" className="my-image" />
                            </Tilt>

                        </Col>
                    </Row>
                </div>
                <div className="skills-tools">
                    <div className="my-skills">
                        <h2 className="skills-header">Professional Skills</h2>
                        <Skills />
                    </div>
                    <div className="my-tools">
                        <h2 className="skills-header">Tools</h2>
                        <Tools />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;