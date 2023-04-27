import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faLinkedin, faGithub,} from '@fortawesome/free-solid-svg-icons'

function Skills() {
    return (
        <section id="skills">
        <p>Skills</p>
        <div>
            <FontAwesomeIcon icon={faCircleCheck} size="2xl" style={{color: "#1f5bc1",}} />
        </div>
        </section>
    );
}

export default Skills;