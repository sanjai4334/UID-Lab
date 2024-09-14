// src/components/Navbar.js
import React from 'react';

function Navbar() {
  const navLinks = [
    { href: '#intro', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <a href="#intro" className="nav-logo">Sanjai Somasundaram</a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={window.location.hash === link.href ? 'active' : ''}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
