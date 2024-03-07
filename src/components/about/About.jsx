import React from "react";
import Skills from "../skills/SkillsAnimation";

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
            {/* <h3 className="title">Personal Info</h3> */}
            {/* <div className="list">
              <ul>
                <li>
                  <p>
                    <span>Name :</span> Bany Jara
                  </p>
                </li>
                <li>
                  <p>
                    <span>Address :</span> H-400 - Path2UK
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age :</span> 21 Years
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone :</span> +12345667
                  </p>
                </li>
                <li>
                  <p>
                    <span>Nationality :</span> USA
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email :</span> yourmail@gmail.com
                  </p>
                </li>
                <li>
                  <p>
                    <span>Freelance :</span> Available
                  </p>
                </li>
                <li>
                  <p>
                    <span>Languages :</span> French, English
                  </p>
                </li>
              </ul>
            </div> */}
            {/* End list */}
            {/* <div className="beny_tm_button color-outline">
              <a href="img/about/cv.webp" download>
                <span className="wrapper">
                  <span className="first">Download CV</span>
                  <span className="second">Download CV</span>
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
      {/* <Skills /> */}
    </>
  );
};

export default AboutDarkAnimation;
