import React, { Suspense } from "react";

const Skills = React.lazy(() => import("../skills/SkillsAnimation"));

const AboutDarkAnimation = () => {
  return (
    <>
      <div className="about_inner">
        <div className="left">
          <img src="img/thumbs/1-1.jpg" alt="" />
          <div
            className="image"
            data-aos="fade-right"
            data-aos-duration="1200"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/about/waqar-ahmad-ceo.jpg"
              })`,
            }}
          ></div>
        </div>
        <div
          className="right"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="50"
        >
          <div className="short">
            <h5>The Brand Face</h5>
            <h3>Waqar Jutt</h3>
            <h5>CEO, Beacon Techh</h5>
            <p>
              As the <b>CEO</b> of a <b>Beacon Techh (Pvt.) Ltd, Waqar Jutt</b>{" "}
              is a visionary leader dedicated to illuminating brands and forging
              meaningful connections with their target audiences. With a rich
              background spanning real estate marketing, education, ecommerce,
              and the automotive industry, Jutt brings a wealth of diverse
              expertise to the table. Renowned for his strategic acumen and
              unparalleled commitment to excellence, he serves as the go-to
              individual for brand activation and profile development
              initiatives. Through his proven journey, Jutt has mastered the art
              of crafting compelling narratives and leveraging innovative
              strategies to propel brands to new heights, ensuring they shine
              brightly in the competitive marketplace.
            </p>
          </div>
          <div className="extra">
            {/* Additional Info can be placed here */}
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Skills />
      </Suspense>
    </>
  );
};

export default AboutDarkAnimation;
