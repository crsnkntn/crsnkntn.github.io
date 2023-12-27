import React from 'react';
import './ProjectView.css'; // Make sure to link the correct CSS file

function ProjectView({ projects, title }) {
  return (
    <div className="project-view">
      <h2>{ title }</h2>
      <div className="carousel">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <img src={project.image} alt={project.title} className="project-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectView;
