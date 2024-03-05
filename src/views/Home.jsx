import React from "react";
import Header from "../components/header/Header";
import Slider from "../components/slider/SliderDarkAnimation";
import About from "../components/about/About";
import Portfolio from "../components/portfolio/Portfolio";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/Contact";
import Footer from "../components/footer/Footer";
import Address from "../components/Address";
import Expertise from "../components/expertise/Expertise";
import Teams from "../components/team/Teams";
import ProjectDelivered from "../components/portfolio/ProjectsDelivered";
// import ProjectDelivered from "../components/portfolio/ProjectsDelivered";

const Home = () => {
  document.body.classList.add("dark");
  return (
    <div className="home-light">
      <Header />
      {/* End Header */}
      <Slider />
      {/* End Slider */}
      <div className="beny_tm_about" id="about">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>FOUNDER & CEO</span>
            <h2>Waqar Ahmad</h2>
          </div>
          {/* End .beny_tm_title */}
          <About />
          {/* End Slider */}
        </div>
      </div>
      {/* /ABOUT */}
      {/* PORTFOLIO */}
      <div className="beny_tm_portfolio" id="portfolio">
        <div className="container">
          <ProjectDelivered />
          {/* <div className="beny_tm_title_holder">
            <h2>Our Portfolio</h2>
            <p>
              "Browse our portfolio to explore a curated selection of our best
              work, showcasing expertise in Different areas. From innovative
              designs to impactful campaigns, these projects demonstrate our
              dedication to excellence and creativity."
            </p>
          </div>
          <Portfolio /> */}
        </div>
      </div>
      {/* /PORTFOLIO */}
      {/* Expertise */}
      <div className="beny_tm_services" id="service">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>What We Do</span>
            <h2>
              We’ve got everything you need to launch and grow your business
            </h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              egestas. Id fermentum nullam ipsum massa.
            </p> */}
          </div>
          {/* End beny_tm_title */}
          <Expertise />
        </div>
      </div>
      {/* /Expertise */}
      {/* Teams */}
      <div className="beny_tm_news" id="news">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>Team</span>
            <h2>Beacon Buddies</h2>
            <p>
              "Highly skilled and innovative Beacon Techh team, specializing in
              creating cutting-edge solutions for diverse industries. We combine
              technical expertise with a passion for problem-solving to deliver
              exceptional software products tailored to your unique needs."
            </p>
          </div>
          <Teams />
        </div>
      </div>
      {/* /Teams End */}
      {/* TESTIMONIALS */}
      <div className="beny_tm_testimonials">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>Testimonials</span>
            <h2>What's Clients Say.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              egestas. Id fermentum nullam ipsum massa.
            </p>
          </div>
          {/* End beny_tm_title */}
          <div
            className="testimonials_list"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <Testimonial />
          </div>
        </div>
      </div>
      {/* /TESTIMONIALS */}
      {/*  CONTACT */}
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
            {/* End .left */}

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
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /CONTACT */}
      {/* COPYRIGHT */}
      <div className="beny_tm_copyright">
        <div className="container">
          <Footer />
        </div>
      </div>
      {/* /COPYRIGHT */}
    </div>
  );
};

export default Home;
