import React from 'react';
import './Home.css';
import lucky from "./ravurii.jpeg"
import Navbar from '../../components/Navbar/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <section className="title" id="home">
        {/* Glowing background circles for visual depth */}
        <div className="glow-blob primary blob-home-1"></div>
        <div className="glow-blob secondary blob-home-2"></div>
        
        <div className="hero-main-layout">
          {/* Left Column: Text Content & Highlights */}
          <div className="hero-content animate-fade-up">
            <div className="badge-welcome">🚀 Welcome to my portfolio</div>
            <h1>
              Hello, I'm <br />
              <span className="highlight-text">Srinu Ravuri</span>
            </h1>

            <p>
              A passionate Front-End & ML Developer creating highly responsive, 
              visually stunning, and user-focused digital environments.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="hero-btn-link">
                <button className="primary-btn">Explore Projects</button>
              </a>
              <a href="/resume.pdf" download="Srinu_Ravuri_Resume.pdf" className="hero-btn-link">
                <button className="secondary-btn">Get Resume</button>
              </a>
            </div>

            {/* Quick Stats Highlights */}
            <div className="hero-highlights">
              <div className="highlight-item">
                <span className="highlight-num">10+</span>
                <span className="highlight-lbl">Yoga Poses Detected</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-num">98%</span>
                <span className="highlight-lbl">ML Accuracy</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-num">2027</span>
                <span className="highlight-lbl">B.Tech Graduate</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Terminal & Photo Composition */}
          <div className="hero-media animate-float">
            {/* Dotted Backdrop */}
            <div className="dot-grid-bg"></div>

            {/* Terminal Window Overlay */}
            <div className="terminal-card">
              <div className="terminal-header">
                <span className="terminal-dot dot-red"></span>
                <span className="terminal-dot dot-yellow"></span>
                <span className="terminal-dot dot-green"></span>
                <span className="terminal-title">developer.js</span>
              </div>
              <div className="terminal-body">
                <pre>
                  <code>
                    <span className="token-keyword">const</span> developer = &#123;<br />
                    &nbsp;&nbsp;name: <span className="token-string">'Srinu Ravuri'</span>,<br />
                    &nbsp;&nbsp;role: <span className="token-string">'Frontend & ML Developer'</span>,<br />
                    &nbsp;&nbsp;skills: [<span className="token-string">'React'</span>, <span className="token-string">'Python'</span>, <span className="token-string">'Tailwind'</span>],<br />
                    &nbsp;&nbsp;focus: <span className="token-string">'User Experience & AI Pipelines'</span><br />
                    &#125;;
                  </code>
                </pre>
              </div>
            </div>

            {/* Floating Tech Badge (React) */}
            <div className="floating-badge react-badge">
              <svg viewBox="-11.5 -10.23174 23 20.46348" width="20" height="20">
                <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
                <g stroke="#61DAFB" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                </g>
              </svg>
              <span>React.js</span>
            </div>

            {/* Glowing Photo Card */}
            <div className="hero-photo-card">
              <div className="photo-inner-border">
                <img src={lucky } alt="Srinu Ravuri" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;