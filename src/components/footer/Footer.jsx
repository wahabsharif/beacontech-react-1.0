import React from "react";

const Footer = () => {
  return (
    <>
      <div className="inner">
        <div className="copy">
          <p>
            &copy; {new Date().getFullYear()}-
            <a href="/" target="_blank" rel="noreferrer">
              Beacon Techh
            </a>
            . All rights reserved.
          </p>
        </div>
        <ul class="footer-nav">
          <li>
            <span>Develop With Passion by</span>
            <a href="https://wahabsharif.me/" target="_blank" rel="noreferrer">
              <img
                src="img/wahab-sharif-logo.png"
                alt="Wahab Sharif Logo"
              ></img>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
