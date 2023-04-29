import React from "react";
import "./Projects.scss";
import navSystem from "../../assets/images/nav-system.png";
import budget from "../../assets/images/budget.png";
import ProjectCard from "./ProjectCard";
import { Row } from "react-bootstrap";

const projects = [
  {
    title: "Navigation System",
    imageSrc: navSystem,
    description: "This is the description for project 1",
    languages: ["C++", "Python"],
  },
  {
    title: "Budget Website",
    imageSrc: budget,
    description: "This is the description for project 2",
    languages: ["Php", "MySQL", "JavaScript"],
  },
  {
    title: "Project 3",
    imageSrc: "/project3.jpg",
    description: "This is the description for project 3",
    languages: ["Java", "Spring"],
  },
];

function Projects() {
  return (
    <section id="projects">
      <div className="projects-list">
        <h1 className="projects-header">Projects</h1>
        <Row xs={1} md={2} lg={3} className="projects-row">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              imageSrc={project.imageSrc}
              description={project.description}
              languages={project.languages}
            />
          ))}
        </Row>
      </div>
    </section>
  );
}

export default Projects;
