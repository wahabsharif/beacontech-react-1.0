// business-revamp.jsx
import React, { Suspense } from "react";
import "../../src/assets/css/business-revamp.css";
import BRNavBar from "../components/business-revamp/BRNavBar";
import Banner from "../components/business-revamp/Banner";
import OurModel from "../components/business-revamp/OurModel";
import UniversalExamples from "../components/business-revamp/UniversalExamples";
import WhyChooseUs from "../components/business-revamp/WhyChooseUs";
import Address from "../components/Address";

const Contact = React.lazy(() => import("../components/Contact"));
const Footer = React.lazy(() => import("../components/footer/Footer"));

const BusinessRevamp = () => {
  return (
    <div className="body">
      <div className="background"></div>
      <div className="overlay"></div>
      <BRNavBar />
      <Banner />
      <OurModel />
      <UniversalExamples />
      <WhyChooseUs />
      <div className="beny_tm_contact dark-bg" id="contact">
        <div className="container">
          <div className="contact_inner">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="beny_tm_title_holder">
                <span>Contact</span>
                <h3>Crafting Excellence in Your Project</h3>
              </div>
              <div className="short_list">
                <Address />
              </div>
            </div>
            <div
              className="right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="150"
            >
              <div className="title">
                <p>
                  We are always open
                  <br />
                  <span>to interaction.</span>
                </p>
              </div>
              <div className="fields">
                <Suspense fallback={<div>Loading...</div>}>
                  <Contact />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="beny_tm_copyright">
        <div className="container">
          <Suspense fallback={<div>Loading...</div>}>
            <Footer />
          </Suspense>
        </div>
      </div>{" "}
    </div>
  );
};

export default BusinessRevamp;
