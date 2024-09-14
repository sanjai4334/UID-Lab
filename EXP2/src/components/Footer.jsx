// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>
          Email: <a href="mailto:sanjais.22it@kongu.edu">sanjais.22it@kongu.edu</a>
        </p>
        <div className="social-icons">
          <a href="https://github.com/sanjai4334" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/sanjai4334" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Sanjai Somasundaram. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
