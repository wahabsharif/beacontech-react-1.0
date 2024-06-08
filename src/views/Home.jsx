import React, { useState, useEffect, Suspense } from "react";
import PageSeo from "../components/PageSEO";
import Address from "../components/Address";
import Expertise from "../components/expertise/Expertise";
import YouTubePlayer from "../components/index/YouTubePlayer";

// Dynamic imports for components
const Header = React.lazy(() => import("../components/header/Header"));
const Footer = React.lazy(() => import("../components/footer/Footer"));
const About = React.lazy(() => import("../components/about/About"));
const Testimonial = React.lazy(() =>
  import("../components/testimonial/Testimonial")
);
const Contact = React.lazy(() => import("../components/Contact"));
const ProjectDelivered = React.lazy(() =>
  import("../components/portfolio/ProjectsDelivered")
);
const Teams = React.lazy(() => import("../components/team/Teams"));

const Home = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkTheme]);

  return (
    <>
      <PageSeo />
      <div className={`home-${isDarkTheme ? "dark" : "light"}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
        <div id="home">
          <YouTubePlayer />
        </div>
        <div className="beny_tm_about" id="about">
          <div className="container">
            <div className="beny_tm_title_holder">
              <span>FOUNDER & CEO</span>
              <h2>Waqar Ahmad</h2>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          </div>
        </div>
        <div className="beny_tm_portfolio" id="portfolio">
          <div className="container">
            <Suspense fallback={<div>Loading...</div>}>
              <ProjectDelivered />
            </Suspense>
          </div>
        </div>
        <div className="beny_tm_services" id="service">
          <div className="container">
            <div className="beny_tm_title_holder">
              <span>What We Do</span>
              <h2>
                We’ve got everything you need to launch and Scale your business
              </h2>
            </div>
            <Expertise />
          </div>
        </div>
        <div className="beny_tm_news" id="news">
          <div className="container">
            <div className="beny_tm_title_holder">
              <span>Team</span>
              <h2>THE POWERHOUSE</h2>
              <p>
                "Highly skilled and innovative Beacon Techh team, specializing
                in creating cutting-edge solutions for diverse industries. We
                combine technical expertise with a passion for problem-solving
                to deliver exceptional software products tailored to your unique
                needs."
              </p>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <Teams />
            </Suspense>
          </div>
        </div>
        <div className="beny_tm_testimonials">
          <div className="container">
            <div className="beny_tm_title_holder">
              <span>Testimonials</span>
              <h2>What's Clients Say.</h2>
            </div>
            <div
              className="testimonials_list"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <Suspense fallback={<div>Loading...</div>}>
                <Testimonial />
              </Suspense>
            </div>
          </div>
        </div>
        <div className="beny_tm_contact" id="contact">
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
        </div>
      </div>
    </>
  );
};

export default Home;
