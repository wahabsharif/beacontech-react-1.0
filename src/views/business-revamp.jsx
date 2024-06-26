// business-revamp.jsx
import React from "react";
import "../../src/assets/css/business-revamp.css";
import BRNavBar from "../components/business-revamp/BRNavBar";

const BusinessRevamp = () => {
  return (
    <div className="body">
      <div className="background"></div>
      <div className="overlay"></div>
      <BRNavBar />
    </div>
  );
};

export default BusinessRevamp;
