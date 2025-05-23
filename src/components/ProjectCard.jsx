import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image }) => (
  <div className="project-card">
    <div className="project-image-container">
      <img src={image} alt={title} className="project-image" />
      <div className="project-overlay">
        <div className="project-description">{description}</div>
      </div>
    </div>
    <div className="project-title">{title}</div>
  </div>
);

export default ProjectCard;