import React from "react";

const Banner = () => {
  return (
    <section>
      <div className="br-container banner-column">
        <div className="banner-inner">
          <h1 className="heading-xl">Business Revamp.</h1>
          <p className="paragraph">
            Transform your business with our comprehensive Business Revamp
            Services designed to propel your company to new heights. Our expert
            team will work closely with you to identify areas for improvement,
            streamline operations, and enhance overall efficiency. Whether
            you’re looking to innovate, enter new markets, or improve customer
            satisfaction, we provide tailored solutions to meet your unique
            needs.
          </p>
          <button className="btn btn-darken btn-inline">Get Started</button>
        </div>
        <img
          className="banner-image"
          src="https://i.ibb.co/sVqYmS2/Illustration.png"
          alt="Illustration"
        />
      </div>
    </section>
  );
};

export default Banner;
