import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { Container, Row} from "react-bootstrap";
import "./Home.scss";

function Home() {
    return (
        <section id="home">
        <Container className="home-container">
            <Row className="home-section">
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
            </Row>
            <Row>
                <h1 className="welcome">
                    Welcome To <br />My Personal Portfolio
                </h1>
            </Row>
        </Container>
        </section>
    );
}

export default Home;
