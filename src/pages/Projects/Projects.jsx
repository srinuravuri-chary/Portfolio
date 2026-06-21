import React from "react";
import './Projects.css';

function Projects () {
  return (
    <section className="projects" id="projects">
      {/* Background glow circle */}
      <div className="glow-blob secondary blob-projects-1"></div>
      
      <div className="projects-container animate-fade-up">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-content">
          <div className="project-header">
            <h3>Yoga Pose Detection & Classification</h3>
          </div>
          
          <p className="project-description">
            A real-time Machine Learning application that detects and classifies 10+ yoga poses from images and live video feeds using advanced computer vision and pose estimation techniques.
          </p>
          
          <div className="highlightbox">
            <div className="tech-tag Python">Python</div>
            <div className="tech-tag Mechine">Machine Learning</div>
            <div className="tech-tag Computer">Computer Vision</div>
            <div className="tech-tag Pose">Pose Estimation</div>
          </div>

          <ul className="project-details">
            <li>Engineered robust keypoint detection algorithms for highly accurate, real-time pose recognition.</li>
            <li>Built complete, end-to-end ML pipeline: preprocessing, training, validation, and evaluation.</li>
            <li>Performed iterative hyperparameter tuning to significantly improve pose classification accuracy.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;