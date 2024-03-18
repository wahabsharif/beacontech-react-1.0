import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrow: false,
          autoplay: true,
        },
      },
    ],
  };

  const testimonialContent = [
    {
      img: "danish.png",
      desc: `Beacon Techh's proactive approach and industry expertise transformed our operations.`,
      name: "Danish Akhunzada",
      designation: "CEO Amanat Marketing PVT. LTD.",
    },
    {
      img: "fawad.png",
      desc: `Beacon Techh's tailored IT consulting optimized our processes, saving costs. Trusted ally in digital transformation journey; a top decision.`,
      name: "Fawad Khan Marwat",
      designation: "Ceo and Founder Castle Marketing.",
    },
    {
      img: "faheem.png",
      desc: `Beacon Techh excels with deep knowledge, commitment, and exceptional support. A valued partner in our growth and innovation journey.`,
      name: "Faheem Awan",
      designation: "CEO,Aeon Marketing Pvt.Ltd.",
    },
    {
      img: "miss-sumaira.png",
      desc: `Beacon Techh streamlines IT infrastructure with expertise, boosting productivity securely. Highly recommended for staying ahead in the digital landscape.`,
      name: "Miss Sumaira",
      designation: "CEO,Capital Valley Pvt.Ltd.",
    },
  ];

  return (
    <Slider {...settings}>
      {testimonialContent.map((val, i) => (
        <div className="item" key={i}>
          <div className="list_inner">
            <div className="left">
              <img src="img/thumbs/1-1.jpg" alt="tumb" />
              <div
                className="main"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + `img/testimonials/${val.img}`
                  })`,
                }}
              ></div>
            </div>
            <div className="right">
              <img className="svg" src="img/svg/quote.svg" alt="quote" />
              <p className="text">{val.desc}</p>
              <div className="details">
                <h3 className="name">
                  <span>{val.name}</span>
                </h3>
                <span className="job">{val.designation}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
