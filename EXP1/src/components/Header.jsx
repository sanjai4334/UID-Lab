import React from 'react';
import './styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#hero">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#cta">Get Started</a>
      </nav>
    </header>
  );
};

export default Header;
