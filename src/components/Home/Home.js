import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { Row, Col, Container } from "react-bootstrap";
import "./Home.scss";
import image from "../../assets/images/programmer-icon.png";

function Home() {
    return (
        <section id="home">
            <Container className="home-container">
                <Row xs={1} md={3} lg={10} className="home-row">
                    <Col md={4} className="home-col">
                        <h1 className="animate-text">
                            <TypeAnimation // Typewriter effect
                                sequence={[
                                    'Hello',
                                    1000,
                                    'Bonjour',
                                    1000,
                                    'Hola',
                                    1000,
                                    '你好',
                                    1000,
                                    'こんにちは',
                                    1000,
                                    '안녕하세요',
                                    1000,
                                    'হ্যালো',
                                    1000,
                                ]}
                                wrapper="span"
                                repeat={Infinity}
                                style={{ fontSize: '0.9em', display: 'inline-block' }}
                            />
                        </h1>

                        <h1 className="welcome">
                            Welcome To <br />My Personal Portfolio
                        </h1>
                    </Col>
                    <Col md={3} className="home-col">
                        <img src={image} alt="programmer-icon" className="programmer-icon" />
                    </Col>
                </Row>

            </Container>
        </section>
    );
}

export default Home;
