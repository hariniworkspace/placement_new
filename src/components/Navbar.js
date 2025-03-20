import React from "react";
import "../components/css/Nav.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="nav-logo">
        <span>VCET</span> Placement Portal
      </a>

      <ul className="nav-links">
        <li>Home</li>
        <li>Analytics</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
