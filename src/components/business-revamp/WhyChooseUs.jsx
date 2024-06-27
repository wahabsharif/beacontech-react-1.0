import React from "react";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <section>
      <div className="br-container">
        <div className="why-us">
          <h2>Why Choose Us?</h2>
          <p>
            <strong>Expertise:</strong> Our team of seasoned professionals
            brings years of experience in various industries. Customization: We
            tailor our services to fit your unique business needs and goals.
            Results-Driven: Focused on delivering measurable improvements and
            tangible results. Innovative Solutions: We leverage the latest
            trends and technologies to keep you ahead of the curve.
          </p>
          <Link to={"/"}>
            <button className="btn btn-darken btn-inline">
              Our Other Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
