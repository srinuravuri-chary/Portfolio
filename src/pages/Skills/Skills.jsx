import React from "react";
import './Skills.css';

const skills = [
  {
    name: "HTML5",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon-svg html-icon" fill="#E34F26">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75h5.082l-.465 4.992-2.912.795-2.91-.795-.185-2.11H4.17l.345 3.992 7.22 2 7.22-2 1.01-11.414H8.53zM6.16 6.81h11.847l.25-2.937H3.218L4.17 6.81h1.99z"/>
      </svg>
    )
  },
  {
    name: "CSS3",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon-svg css-icon" fill="#1572B6">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.273-3.075 11.202.003.262-2.937L3.71 3.738l.82 9.24h8.344l-.328 3.543-2.836.756-2.856-.766-.182-2.054H3.666l.322 3.702 7.747 2.12 7.77-2.12 1.025-11.51H8.53z"/>
      </svg>
    )
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon-svg js-icon" fill="#F7DF1E">
        <path d="M0 0h24v24H0V0zm22.034 18.268c-.156-1.124-.831-2.07-2.13-2.503-.996-.334-1.87-.5-2.624-.73-.82-.268-1.154-.485-1.154-.902 0-.495.43-.797 1.08-.797.693 0 1.15.263 1.5.827l2.26-1.346c-.707-1.293-1.884-1.868-3.49-1.868-2.223 0-3.857 1.22-3.857 3.025 0 1.83 1.384 2.49 3.033 3.008.932.27 1.852.44 2.228.815.302.278.48.608.48 1.02 0 .524-.48.924-1.326.924-.945 0-1.422-.488-1.755-1.04l-2.078 1.303c.594 1.185 1.832 2.03 3.85 2.03 2.52 0 4.13-1.14 4.13-3.143zM8.81 13.045H5.83v7.01c0 1.2.4 1.908 1.66 1.908 1.278 0 1.53-.787 1.53-1.907v-7.011zm-.087-2.518c0-.825-.66-1.485-1.485-1.485s-1.485.66-1.485 1.485c0 .813.66 1.485 1.485 1.485s1.485-.672 1.485-1.485z"/>
      </svg>
    )
  },
  {
    name: "React.js",
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="skill-icon-svg react-icon">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    )
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon-svg tailwind-icon" fill="#38BDF8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 1 .25 1.7 1 2.5 1.8C14 11.2 15.7 13 19 13c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.97-.24-1.66-1-2.46-1.8-.82-.82-2.52-2.2-6.33-2.2zm-6 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 1 .25 1.7 1 2.5 1.8 1.3 1.3 3 3.2 6.3 3.2 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.97-.24-1.66-1-2.46-1.8-.83-.82-2.53-2.2-6.34-2.2z"/>
      </svg>
    )
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon-svg typescript-icon" fill="#3178C6">
        <path d="M0 0h24v24H0V0zm22.034 18.268c-.156-1.124-.831-2.07-2.13-2.503-.996-.334-1.87-.5-2.624-.73-.82-.268-1.154-.485-1.154-.902 0-.495.43-.797 1.08-.797.693 0 1.15.263 1.5.827l2.26-1.346c-.707-1.293-1.884-1.868-3.49-1.868-2.223 0-3.857 1.22-3.857 3.025 0 1.83 1.384 2.49 3.033 3.008.932.27 1.852.44 2.228.815.302.278.48.608.48 1.02 0 .524-.48.924-1.326.924-.945 0-1.422-.488-1.755-1.04l-2.078 1.303c.594 1.185 1.832 2.03 3.85 2.03 2.52 0 4.13-1.14 4.13-3.143zM12.066 9.45h-9.9v2.25h3.75v8.25h2.4v-8.25h3.75V9.45z"/>
      </svg>
    )
  },
  {
    name: "Git",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon-svg git-icon" fill="#F05032">
        <path d="M23.54 11.48L12.52.46a1.47 1.47 0 0 0-2.08 0L7.68 3.22l3.22 3.22a3.3 3.3 0 0 1 3.73.54 3.3 3.3 0 0 1 .54 3.73l3.22 3.22a3.3 3.3 0 0 1 3.73.54 3.3 3.3 0 0 1-.58 4.67 3.3 3.3 0 0 1-4.66-.58 3.3 3.3 0 0 1-.54-3.73l-3.22-3.22a3.3 3.3 0 0 1-3.73-.54c-.95-.95-1.12-2.38-.54-3.51L6.14 7.23a3.3 3.3 0 0 1-3.73-.54 3.3 3.3 0 0 1-.58-4.66 3.3 3.3 0 0 1 4.67-.58c.95.95 1.12 2.38.54 3.51l2.52 2.52-2.52-2.52c-.4-.4-1.08-.4-1.48 0L.46 10.42a1.47 1.47 0 0 0 0 2.08l11.02 11.02a1.47 1.47 0 0 0 2.08 0l11.02-11.02a1.47 1.47 0 0 0 0-2.08z"/>
      </svg>
    )
  },
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon-svg next-icon">
        <circle cx="12" cy="12" r="12" fill="#000" />
        <path d="M18.6 19.3L10.3 8.7H8.5v6.6h1.6V10.6l7.8 10.1c.3-.4.5-.9.7-1.4z M15.5 8.7h1.6v6.6h-1.6z" fill="#fff" />
      </svg>
    )
  }
];

function Skills() {
  return (
    <section className="skills" id="skills">
      {/* Background glow circle */}
      <div className="glow-blob primary blob-skills-1"></div>
      
      <div className="skills-container animate-fade-up">
        <h2>Skills</h2>

        <p className="skills-text">
          The skills I have learned and used through academic projects and
          hands-on practice. I focus on building responsive, user-friendly web
          applications using modern technologies.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const cardClass = skill.name.toLowerCase().replace('.js', '').replace('5', '').replace('3', '') + '-card';
            return (
              <div className={`skill-card ${cardClass}`} key={index}>
                <div className="skill-icon-container">
                  {skill.icon}
                </div>
                <h3>{skill.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;