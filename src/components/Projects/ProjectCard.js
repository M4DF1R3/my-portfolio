import React from "react";
import "./Projects.scss";

const ProjectCard = ({ imageSrc, title, description, languages }) => {
  return (
    <div className="project-card">
      <img src={imageSrc} alt={title} />
      <div className="project-info">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <p className="project-languages">Languages: {languages.join(", ")}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
