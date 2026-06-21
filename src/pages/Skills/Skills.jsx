import React from "react";
import './Skills.css';

const skills = [
  {
    name: "HTML5",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon-svg html-icon">
        <path fill="#E34F26" d="M1.5 22L0 0h24l-1.5 22L12 24z"/>
        <path fill="#EF652A" d="M12 22.2l7.4-2L20.8 5.8H12z"/>
        <path fill="#EAEAEA" d="M12 9.6H7.9l-.3-2.9H12V3.8H4.6l.7 8.5H12z"/>
        <path fill="#FFFFFF" d="M12 15.4l-.1.1-4.1-1.1-.3-2.9H4.7l.6 6.7 6.7 1.9z"/>
        <path fill="#EAEAEA" d="M12 9.6h5.4l-.5 5.7-4.9 1.3V14l2.5-.7.3-3.1H12z"/>
      </svg>
    )
  },
  {
    name: "CSS3",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon-svg css-icon">
        <path fill="#1572B6" d="M1.5 22L0 0h24l-1.5 22L12 24z"/>
        <path fill="#33A9DC" d="M12 22.2l7.4-2L20.8 5.8H12z"/>
        <path fill="#EAEAEA" d="M12 9.6H7.9l-.3-2.9H12V3.8H4.6l.7 8.5H12z"/>
        <path fill="#FFFFFF" d="M12 15.4l-.1.1-4.1-1.1-.3-2.9H4.7l.6 6.7 6.7 1.9z"/>
        <path fill="#EAEAEA" d="M12 9.6h5.4l-.5 5.7-4.9 1.3V14l2.5-.7.3-3.1H12z"/>
      </svg>
    )
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 488 488" className="skill-icon-svg js-icon">
        <path fill="#F7DF1E" d="M0 0v488h488V0H0z"/>
        <path fill="#000000" d="M283.8 381.9c0 44-35.8 61.3-84.5 61.3-46.7 0-77.9-19-94.6-50.6l50.6-29.3c9.3 17.3 22.7 26.7 42.7 26.7 21.3 0 35.2-9.3 35.2-34.7V174.9h50.6v207zM424 381.9c0 47.9-29.3 64-80 64-46.7 0-76.6-21.3-91.9-52l49.3-29.3c9.3 14.7 21.3 26.7 41.3 26.7 22.7 0 30.6-10.7 30.6-25.3 0-18.7-14.7-25.3-38.6-35.9l-14.7-6.7c-36-16-60-37.3-60-78.6 0-44 33.3-68 81.3-68 40 0 68 16 81.3 42.7l-45.3 28c-8-13.3-18.7-20-33.3-20-16 0-25.3 8-25.3 20 0 13.3 9.3 18.7 29.3 26.7l30.6 13.3c44.1 18.7 66.7 40 66.7 83.2z"/>
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
      <svg viewBox="0 0 24 24" className="skill-icon-svg tailwind-icon">
        <path fill="#38BDF8" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 1 .25 1.7 1 2.5 1.8C14 11.2 15.7 13 19 13c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.97-.24-1.66-1-2.46-1.8-.82-.82-2.52-2.2-6.33-2.2zm-6 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 1 .25 1.7 1 2.5 1.8 1.3 1.3 3 3.2 6.3 3.2 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.97-.24-1.66-1-2.46-1.8-.83-.82-2.53-2.2-6.34-2.2z"/>
      </svg>
    )
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon-svg typescript-icon">
        <path fill="#3178C6" d="M0 0h24v24H0z"/>
        <path fill="#FFFFFF" d="M11.95 16.32a.15.15 0 0 1-.15.15H10.1a.15.15 0 0 1-.15-.15v-5.23H7.8a.15.15 0 0 1-.15-.15V9.45c0-.08.07-.15.15-.15h5.9c.08 0 .15.07.15.15v1.49a.15.15 0 0 1-.15.15h-1.85zm3.89-2.07c.22.45.54.67 1 .67.35 0 .61-.13.78-.4a1.86 1.86 0 0 0 .26-.95c0-.6-.18-.94-.53-1.07-.27-.1-.66-.23-1.19-.38a3.1 3.1 0 0 1-1.66-.88c-.46-.48-.68-1.12-.68-1.92s.27-1.46.8-1.95a3.34 3.34 0 0 1 2.3-.77c.97 0 1.73.28 2.28.85s.81 1.35.8 2.34a.15.15 0 0 1-.15.15h-1.65c-.08 0-.15-.06-.15-.14a1.9 1.9 0 0 0-.25-.92c-.17-.26-.47-.4-.9-.4s-.73.13-.88.4a1.35 1.35 0 0 0-.22.79c0 .48.16.78.47.92.21.1.58.22 1.13.38a3.38 3.38 0 0 1 1.83 1c.5.51.76 1.2.76 2.06a3 3 0 0 1-.85 2.13c-.56.57-1.37.86-2.43.86-1.12 0-2-.32-2.61-.95a3.5 3.5 0 0 1-.87-2.3c0-.08.06-.15.15-.15h1.72a.15.15 0 0 1 .15.15z"/>
      </svg>
    )
  },
  {
    name: "Git",
    icon: (
      <svg viewBox="0 0 24 24" className="skill-icon-svg git-icon">
        <path fill="#F05032" d="M23.2 11.3L12.7.8c-.4-.4-1.1-.4-1.5 0L8.7 3.3l3.2 3.2c.3-.1.6-.2.9-.2.8 0 1.6.3 2.2.9.6.6.9 1.4.9 2.2 0 .3-.1.6-.2.9l3.2 3.2c.3-.1.6-.2.9-.2.8 0 1.6.3 2.2.9.6.6.9 1.4.9 2.2 0 .8-.3 1.6-.9 2.2-.6.6-1.4.9-2.2.9-.8 0-1.6-.3-2.2-.9-.6-.6-.9-1.4-.9-2.2 0-.3.1-.6.2-.9l-3.2-3.2c-.3.1-.6.2-.9.2-.8 0-1.6-.3-2.2-.9L6.1 9.7c-.3.1-.6.2-.9.2-.8 0-1.6-.3-2.2-.9-.6-.6-.9-1.4-.9-2.2 0-.8.3-1.6.9-2.2.6-.6 1.4-.9 2.2-.9.3 0 .6.1.9.2l3.2-3.2-2.5-2.5c-.4-.4-1.1-.4-1.5 0L.8 11.3c-.4.4-.4 1.1 0 1.5l10.5 10.5c.4.4 1.1.4 1.5 0l10.5-10.5c.4-.4.4-1.1 0-1.5z"/>
      </svg>
    )
  },
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 180 180" className="skill-icon-svg next-icon">
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#mask0)">
          <circle cx="90" cy="90" r="90" fill="black" />
          <path d="M149.508 157.52L69.142 54H54v72h14.4V76.68l71.217 91.955c3.847-3.413 7.397-7.147 10.612-11.115z" fill="white" />
          <path d="M117 54h14v72h-14z" fill="url(#paint0_linear)" />
        </g>
        <defs>
          <linearGradient id="paint0_linear" x1="121" y1="54" x2="120.799" y2="106" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
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