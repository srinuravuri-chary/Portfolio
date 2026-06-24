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
            <h3>1.Yoga Pose Detection & Classification</h3>
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

        <div className="projects-content project-card-2">
        <div className="project-header">
          <h3>2. Portfolio Website</h3>
        </div>
        <p className="project-description">
          A modern and responsive personal portfolio website built with
          <strong> React.js </strong> and <strong>Node.js</strong> to showcase my
          projects, technical skills, and professional journey. It features a clean
          UI, smooth navigation, and serves as a platform to connect with recruiters
          and collaborators.
        </p>

        <div className="highlightbox">
          <div className="tech-tag Reactjs">React.js</div>
          <div className="tech-tag Nodejs">Node.js</div>
          <div className="tech-tag Javascript">JavaScript</div>
          <div className="tech-tag HTML">HTML</div>
          <div className="tech-tag CSS">CSS</div>
        </div>

        <ul className="project-details">
          <li>Designed and developed a fully responsive portfolio with a modern user interface.</li>
          <li>Showcases full-stack projects, technical skills, certifications, and contact information.</li>
          <li>Built using React for the frontend and Node.js for backend integration and future scalability.</li>
          <li>Deployed the application online and optimized it for performance and user experience.</li>
        </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
