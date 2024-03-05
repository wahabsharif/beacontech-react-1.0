import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import { FiBox, FiSun, FiZap, FiGrid, FiPhone, FiLoader } from "react-icons/fi";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* TOPBAR  */}
      <div className={navbar ? "beny_tm_topbar animate" : "beny_tm_topbar"}>
        <div className="in">
          <div className="topbar_inner">
            <div className="logo">
              <Link to="/">
                <img src="img/logo/bt-logo-light.png" alt="brand" />
              </Link>
            </div>
            <div className="menu">
              <Scrollspy
                className="anchor_nav"
                items={[
                  "home",
                  "about",
                  "portfolio",
                  "service",
                  "news",
                  "contact",
                ]}
                currentClassName="current"
                offset={-88}
              >
                <li className="current">
                  <a href="#home">
                    <span className="first">Home</span>
                    <span className="second">Home</span>
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <span className="first">About</span>
                    <span className="second">About</span>
                  </a>
                </li>
                <li>
                  <a href="#portfolio">
                    <span className="first">Portfolio</span>
                    <span className="second">Portfolio</span>
                  </a>
                </li>
                <li>
                  <a href="#service">
                    <span className="first">Expertise </span>
                    <span className="second">Expertise </span>
                  </a>
                </li>
                <li>
                  <a href="#news">
                    <span className="first">Teams</span>
                    <span className="second">Teams</span>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <span className="first">Contact</span>
                    <span className="second">Contact</span>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <span className="wrapper">
                      <span className="first">Get Free Audit</span>
                      <span className="second">Get Free Audit</span>
                    </span>
                  </a>
                </li>
              </Scrollspy>
            </div>
          </div>
        </div>
      </div>
      {/* /TOPBAR */}

      <div className="mobile-menu-wrapper">
        <div className="logo-mob">
          <Link to="/">
            <img src="/img/logo/bt-icon.png" alt="Beacon Techh Logo" />
          </Link>
        </div>
        <Scrollspy
          className="mobile_menu-icon"
          items={["home", "about", "portfolio", "service", "news", "contact"]}
          currentClassName="current"
          offset={-65}
        >
          <li>
            <a href="#home">
              <FiBox />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <FiSun />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <FiGrid />
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#service">
              <FiZap />
              <span>Serivce</span>
            </a>
          </li>
          <li>
            <a href="#news">
              <FiLoader />
              <span>Teams</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <FiPhone />
              <span>Contact</span>
            </a>
          </li>
        </Scrollspy>
      </div>
      {/* End mobile-menu */}
    </>
  );
};

export default Header;
