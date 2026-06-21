import React from "react";
import "./About.css";
import srinu from './sree.jpeg';

function About() {
 return (
    <section className="about" id="about">
      {/* Background glow circle */}
      <div className="glow-blob tertiary blob-about-1"></div>
      
      <div className="about-container animate-fade-up">
        <div className="about-content">
          <h2>About Me</h2>

          <p>
            Hi, I'm <span className="highlight-text">Srinu Ravuri</span>, a passionate Front-End Developer
            pursuing my graduation at Sri Chaitanya College of Education
            (2027). I enjoy creating modern, responsive, and user-friendly web
            applications using React.js, JavaScript, HTML, CSS, and Tailwind
            CSS.
          </p>

          <p>
            I love transforming ideas into beautiful digital experiences and
            continuously improving my skills in web development, UI/UX design,
            and modern frontend technologies.
          </p>
        </div>
      </div>
      
      <div className="about-image-wrapper">
        <div className="dot-grid-bg"></div>
        <div className="about-image">
          <img src={srinu} alt="Srinu Ravuri" />
        </div>
      </div>
    </section>
  );
}

export default About;