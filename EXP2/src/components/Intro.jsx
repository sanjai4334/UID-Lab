// src/components/Intro.js
import React from 'react';

function Intro() {
  return (
    <section id="intro" className="section intro">
      <div className="intro-content">
        <div className="intro-left">
          <img src="/src/assets/profile.png" alt="Profile" className="profile-img" />
        </div>
        <div className="intro-right">
          <h1>Sanjai Somasundaram</h1>
          <p>Software Engineer</p>
          <p className="tagline">Turning ideas into elegant, efficient code</p>
          <p>
            Hello! I'm Sanjai, a passionate Software Engineer specializing in creating innovative
            solutions and applications. I love working with various technologies and continuously
            learning new skills.
          </p>
          <div className="social-links">
            <a href="https://linkedin.com/in/sanjai4334" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/sanjai4334" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
          <a href="#contact" className="cta-button">Get in Touch</a>
          <a href="Resume.pdf" className="resume-link" download>Download Resume</a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
