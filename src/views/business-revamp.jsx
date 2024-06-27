// business-revamp.jsx
import React from "react";
import "../../src/assets/css/business-revamp.css";
import BRNavBar from "../components/business-revamp/BRNavBar";
import Banner from "../components/business-revamp/Banner";
import OurModel from "../components/business-revamp/OurModel";
import UniversalExamples from "../components/business-revamp/UniversalExamples";

const BusinessRevamp = () => {
  return (
    <div className="body">
      <div className="background"></div>
      <div className="overlay"></div>
      <BRNavBar />
      <Banner />
      <OurModel />
      <UniversalExamples />
    </div>
  );
};

export default BusinessRevamp;
