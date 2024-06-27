import React from "react";

const OurModel = () => {
  return (
    <section>
      <div className="br-container">
        <div className="our-model">
          <div className="model-content">
            <h2>Our 4S Model</h2>
            <p>
              We Assess your brand presence and modify its customer engagement
              in 4 Steps.
            </p>
          </div>
          <div className="model-list">
            <ul>
              <li>
                <img
                  src="/img/svg/power-element.svg"
                  alt="Power Element Icon"
                />
                {/* <p className="model-list-title">Step 1</p> */}
                <p className="model-list-description">
                  We identify your power elements, like what your brand stand’s
                  out in the market for?
                </p>
              </li>
              <li>
                <img
                  src="/img/svg/digital-presence.svg"
                  alt="Power Element Icon"
                />
                {/* <p className="model-list-title">Step 2</p> */}
                <p className="model-list-description">
                  We assist you to better explain your brand through digital
                  presence and highlight your key services.
                </p>
              </li>
              <li>
                <img
                  src="/img/svg/customer-response.svg"
                  alt="Power Element Icon"
                />
                {/* <p className="model-list-title">Step 3</p> */}
                <p className="model-list-description">
                  We note down the customers response to innovation and help
                  them settle for what they love in your brand{" "}
                </p>
              </li>
              <li>
                <img
                  src="/img/svg/business-growth.svg"
                  alt="Power Element Icon"
                />
                {/* <p className="model-list-title">Step 4</p> */}
                <p className="model-list-description">
                  We grow your business by making it reach relevant audience in
                  multiple states and countries across the globe, enabling
                  higher chances for business growth, franchising and clientage.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurModel;
