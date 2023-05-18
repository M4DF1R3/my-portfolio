import { Col, Row } from "react-bootstrap";
import {
    DiGit,
    DiLinux,
    DiNodejs,
} from "react-icons/di";
import {
    SiGnubash,
    SiVmware,
} from "react-icons/si";

function Tools() {
    return (
        <div>
            <Row className="skills-row">
                <Col xs={4} md={2} className="skills-icons">
                    <DiGit />
                </Col>
                <Col xs={4} md={2} className="skills-icons">
                    <DiNodejs />
                </Col>
                <Col xs={4} md={2} className="skills-icons">
                    <SiGnubash />
                </Col>
                <Col xs={4} md={2} className="skills-icons">
                    <DiLinux />
                </Col>
                <Col xs={4} md={2} className="skills-icons">
                    <SiVmware />
                </Col>
            </Row>
        </div>
    );
}

export default Tools;