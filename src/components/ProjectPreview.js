// src/components/ProjectPreview.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './ProjectPreview.css';

function ProjectPreview({ projectName }) {
  return (
    <div className="project-preview">
      <div className="project-header">
        <h3 className="project-title">{projectName}</h3>
        <div className="project-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>
      </div>

      <div className="project-main-content">
        {/* Main content area for project details, description, or image */}
        <p>This is a preview of the project. More details can go here.</p>
      </div>

      <div className="project-side-previews">
        <div className="side-preview">1</div>
        <div className="side-preview">2</div>
        <div className="side-preview">3</div>
      </div>
    </div>
  );
}

export default ProjectPreview;
