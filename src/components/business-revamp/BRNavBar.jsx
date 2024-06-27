import React, { useState } from "react";
import { Link } from "react-router-dom";

const BRNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-bar-container">
      <div className="nav-bar">
        <div className={`logo ${isMenuOpen ? "hide" : ""}`}>
          <img src="/img/logo/bt-logo-light.png" alt="Beacon Tech Logo" />
        </div>
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" className="nav">
            Home
          </Link>
          <Link to="/" className="nav">
            About
          </Link>
          <Link to="/" className="nav">
            Portfolio
          </Link>
          <Link to="/" className="nav">
            Services
          </Link>
          <div className="nav-btn">
            <Link to="https://wa.me/923188565612">Contact Us</Link>
          </div>
        </div>
        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
};

export default BRNavBar;
