import React from "react";
import "./Projects.scss";
import navSystem from "../../assets/images/nav-system.png";
import budget from "../../assets/images/budget.png";
import ProjectCard from "./ProjectCard";
import particle from "../../assets/images/particle.png";
import { Row } from "react-bootstrap";

const projects = [
  {
    title: "Navigation System",
    imageSrc: navSystem,
    description: "I worked independently on a Navigation System that required me to implement Dijkstra’s algorithm, data parsing, and the in and out pipe communication to the pygame plotter. I created a C++ class called digraph.cpp and implemented Dijkstra's algorithm to determine the least cost path between two vertices. Through my implementation of unordered maps and a min heap, my algorithm achieved an efficient time complexity.",
    languages: ["C++", "Python"],
  },
  {
    title: "Budget Website",
    imageSrc: budget,
    description: "I created a budget website that allows users to track their expenses. User can login and add/remove/edit expenses and create/delete/edit budgets. I used MySQL to store the user's data and login info and I used PHP to handle the backend.",
    languages: ["Php", "MySQL", "CSS"],
  },
  {
    title: "Particle Reaction Simulator",
    imageSrc: particle,
    description: "I collaborated with 4 other members at the 2023 HackED hackathon to produce a working model within 24 hours. We successfully simulated 3D elastic collisions between hundreds of particles and reacted to form a new particle utilizing Three.js. In addition, we added macroscopic properties such as temperature which can affect the velocity of each particle and the reaction speed.",
    languages: ["Three.js", "JavaScript", "HTML", "CSS"],
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
