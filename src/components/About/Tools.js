import { Col, Row } from "react-bootstrap";
import {
    DiGit,
    DiLinux,

} from "react-icons/di";
import {
    SiGnubash,
    SiVmware,
    SiVisualstudiocode,
} from "react-icons/si";

function Tools() {
    return (
        <div>
            <Row style={{ justifyContent: "center" }}>
                <Col xs={4} md={2} className="skills-icons">
                    <DiGit />
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
                <Col xs={4} md={2} className="skills-icons">
                    <SiVisualstudiocode />
                </Col>
            </Row>
        </div>
    );
}

export default Tools;