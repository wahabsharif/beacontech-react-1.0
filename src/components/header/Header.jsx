import React, { useState, useEffect } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import { FiBox, FiSun, FiZap, FiGrid, FiPhone, FiLoader } from "react-icons/fi";

// Configuration for menu items
const menuItems = [
  { id: "home", label: "Home", icon: <FiBox /> },
  { id: "about", label: "About", icon: <FiSun /> },
  { id: "portfolio", label: "Portfolio", icon: <FiGrid /> },
  { id: "service", label: "Service", icon: <FiZap /> },
  { id: "news", label: "Teams", icon: <FiLoader /> },
  { id: "contact", label: "Contact", icon: <FiPhone /> },
];

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      setNavbar(window.scrollY >= 80);
    };

    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

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
                items={menuItems.map((item) => item.id)}
                currentClassName="current"
                offset={-88}
              >
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>
                      <span className="first">{item.label}</span>
                      <span className="second">{item.label}</span>
                    </a>
                  </li>
                ))}
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
        <Scrollspy
          className="mobile_menu-icon"
          items={menuItems.map((item) => item.id)}
          currentClassName="current"
          offset={-65}
        >
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>
                {item.icon}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </Scrollspy>
      </div>
      {/* End mobile-menu */}
    </>
  );
};

export default Header;
