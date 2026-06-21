import React, { useState } from 'react'
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="logo" onClick={closeMenu}>
          <a href="#home">
            <h1>Srinu Portfolio<span className='dot'>.</span></h1>
          </a>
        </div>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
          
          {/* Mobile visible action buttons */}
          <div className="mobile-only-btns">
            <a href="#projects" className="explore-btn-link" onClick={closeMenu}>
              <div className="explore">Explore</div>
            </a>
            <a href="/resume.pdf" download="Srinu_Ravuri_Resume.pdf" className="resume-btn-link" onClick={closeMenu}>
              <div className="resume">Resume</div>
            </a>
          </div>
        </nav>

        <div className="download-btns desktop-only-btns">
          <a href="#projects" className="explore-btn-link">
            <div className="explore">Explore</div>
          </a>
          <a href="/resume.pdf" download="Srinu_Ravuri_Resume.pdf" className="resume-btn-link">
            <div className="resume">Resume</div>
          </a>
        </div>

        <button 
          className={`navbar-toggle ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar