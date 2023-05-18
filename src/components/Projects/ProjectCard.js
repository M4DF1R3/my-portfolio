import React from "react";
import "./Projects.scss";

const ProjectCard = ({ imageSrc, githubLink, title, description, languages }) => {
  return (
    <div className="project-card">
      <a href={githubLink} target="_blank" rel="noreferrer">
        <img src={imageSrc} alt={title} />
      </a>
      <div className="project-info">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <p className="project-languages">Languages: {languages.join(", ")}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
