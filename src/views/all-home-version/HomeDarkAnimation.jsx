import React from "react";
import Header from "../../components/header/HeaderDark";
import Slider from "../../components/slider/SliderDarkAnimation";
import About from "../../components/about/AboutDarkAnimation";
import Service from "../../components/service/ServiceAnimation";
import Portfolio from "../../components/portfolio/PortfolioAnimation";
import Testimonial from "../../components/testimonial/Testimonial";
import Blog from "../../components/blog/BlogAnimation";
import Contact from "../../components/Contact";
import Footer from "../../components/footer/Footer";
import Address from "../../components/Address";

const HomeDarkAnimation = () => {
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
            <h2>Waqar Jutt</h2>
            <p>
              We’re working on all social media platforms to help companies –
              big and small – evaluate their customer experiences, which in turn
              will empower them to make data- and design-driven decisions with
              humans at their core.
            </p>
          </div>
          {/* End .beny_tm_title */}
          <About />
          {/* End Slider */}
        </div>
      </div>
      {/* /ABOUT */}

      {/* SERVICES */}
      <div className="beny_tm_services" id="service">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>What We Do</span>
            <h2>
              We’ve got everything you need to launch and grow your business
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              egestas. Id fermentum nullam ipsum massa.
            </p>
          </div>
          {/* End beny_tm_title */}
          <Service />
        </div>
      </div>
      {/* /SERVICES */}

      {/* PORTFOLIO */}
      <div className="beny_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>Portfolio</span>
            <h2>My Portfolio</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              egestas. Id fermentum nullam ipsum massa.
            </p>
          </div>
          {/* End beny_tm_title */}
          <Portfolio />
        </div>
      </div>
      {/* /PORTFOLIO */}

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

      {/* NEWS */}
      <div className="beny_tm_news" id="news">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>Blogs</span>
            <h2>Recent News</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              egestas. Id fermentum nullam ipsum massa.
            </p>
          </div>
          {/* End beny_tm_title */}
          <Blog />
        </div>
      </div>
      {/* /NEWS */}

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

export default HomeDarkAnimation;
