// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../Style.css"

function Navbar() {
  return (
    <nav className="navbar">
      <h2><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Alcohol Dictionary🍷</Link></h2>
    </nav>
  );
}

export default Navbar;
