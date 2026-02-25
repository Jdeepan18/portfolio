import React from 'react';

// Modal for expanded project details
function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal-card">
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>
        <div className="modal-header">
          <h3>{project.title}</h3>
          {project.subtitle && (
            <p className="modal-subtitle">{project.subtitle}</p>
          )}
        </div>
        <div className="modal-body">
          <p className="modal-description">{project.longDescription}</p>
          {project.highlights && project.highlights.length > 0 && (
            <ul className="modal-list">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {project.tools && project.tools.length > 0 && (
            <div className="modal-tags">
              {project.tools.map((tool) => (
                <span key={tool} className="tag">
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
