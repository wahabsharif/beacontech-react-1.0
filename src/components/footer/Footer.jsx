import React from "react";

const companyInfo = {
  name: "Beacon Techh",
  url: "https://beacontechh.com",
  startYear: 2020, // Example start year
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yearDisplay =
    currentYear > companyInfo.startYear
      ? `${companyInfo.startYear}-${currentYear}`
      : currentYear;

  return (
    <>
      <div className="inner">
        <div className="copy">
          <p>
            &copy; {yearDisplay} -
            <a href={companyInfo.url} target="_blank" rel="noreferrer">
              {companyInfo.name}
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
