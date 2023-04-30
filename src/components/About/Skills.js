import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiCplusplus, SiAssemblyscript } from "react-icons/si";
import {
    DiPython,
    DiJavascript1,
    DiHtml5,
    DiCss3,
    DiReact,
    DiJava,
    DiPhp,
} from "react-icons/di";
import { TbSql } from "react-icons/tb";


function Skills() {
    return (

        <Row md={2} className="skills-row">
            <Col xs={4} md={2} className="skills-icons">
                <SiCplusplus />
            </Col>
            <Col xs={4} md={2} className="skills-icons">
                <DiPython />
            </Col>
            <Col xs={4} md={2} className="skills-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="skills-icons">
                <DiHtml5 />
            </Col>
            <Col xs={4} md={2} className="skills-icons">
                <DiCss3 />
            </Col>
            <Col xs={4} md={2} className="skills-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="skills-icons">
                <TbSql />
            </Col>
            <Col xs={4} md={2} className="skills-icons">
                <SiAssemblyscript />
            </Col>
            <Col xs={4} md={2} className="skills-icons">
                <DiPhp />
            </Col>
            <Col xs={4} md={2} className="skills-icons">
                <DiJava />
            </Col>
        </Row>
    );
}

export default Skills;