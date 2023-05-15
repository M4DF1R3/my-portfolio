import React from "react";
import "./Navbar.scss";
import { FaHome, FaUserAlt, FaRocket, FaEnvelope } from "react-icons/fa";
import { Navbar, Nav } from "react-bootstrap";
import Container from 'react-bootstrap/Container';


function NavBar() {
    return (
        <Navbar style={{ backgroundColor: 'rgb(31 41 55)' }} variant="dark" expand="lg" >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="top-nav">
                        <Nav.Link href="/"><FaHome /> Home</Nav.Link>
                        <Nav.Link href="/About"><FaUserAlt /> About</Nav.Link>
                        <Nav.Link href="/Projects"><FaRocket /> Projects</Nav.Link>
                        <Nav.Link href="/Contact"><FaEnvelope /> Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
