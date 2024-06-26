import React from "react";
import { Link } from "react-router-dom";

const BRNavBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar">
        <div className="logo">
          <img src="/img/logo/bt-logo-light.png" alt="Beacon Tech Logo" />
        </div>
        <Link to="/" className="nav">
          Home
        </Link>
        {/* <Link to="#" className="nav">
          Search
        </Link>
        <Link to="#" className="nav">
          Following
        </Link> */}
        <Link to="/contact" className="nav">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default BRNavBar;
