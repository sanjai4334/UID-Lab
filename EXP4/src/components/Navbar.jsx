import React from 'react';
import { Link } from 'react-router-dom';

const CustomNavbar = ({ cartItems }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        E-Commerce Website
      </Link>
      <div className="nav-links">
        <Link to="/cart" className="cart-link">
          Cart: {cartItems} items
        </Link>
      </div>
    </nav>
  );
};

export default CustomNavbar;
