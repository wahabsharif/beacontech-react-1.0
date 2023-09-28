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
            {/* <h3>I'm Bany Astro</h3> */}
            <h5>
              <span className="theme-color">Waqar Ahmad </span>
              is the visionary leader and driving force behind
              <span className="theme-color"> Beacon Techh</span>.
            </h5>
            <p>
              A renowned software development company known for delivering
              innovative solutions that drive business success. With a blend of
              technical expertise and strategic insight, <b>Waqar Ahmad</b>
              leads a talented team in creating cutting-edge software products
              that transform industries. Under their guidance,{" "}
              <b>Beacon Techh</b> continues to excel as a trusted partner for
              businesses seeking technology-driven solutions.
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
      <Skills />
    </>
  );
};

export default AboutDarkAnimation;
