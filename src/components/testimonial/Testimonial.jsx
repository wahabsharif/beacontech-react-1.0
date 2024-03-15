import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 300,
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
      img: "danish-akhunzada.jpg",
      desc: `"Working with Beacon Techh has been a game-changer for our company. Their team's proactive approach and deep understanding of our industry have transformed the way we operate. From implementing cutting-edge software solutions to providing exceptional support, Beacon Techh has exceeded our expectations at every turn. Without a doubt, they are the go-to partner for all our tech needs."`,
      name: "Danish Akhunzada",
      designation: "CEO Amanat Marketing PVT. LTD.",
    },
    {
      img: "ceo-castle-marketing-fawad-khan-marwat.jpg",
      desc: `"I can't speak highly enough of Beacon Techh and the impact they've had on our business. Their tailored approach to IT consulting has helped us optimize our processes and achieve remarkable cost savings. Their responsiveness and professionalism set them apart, making them a trusted ally in our journey towards digital transformation. Choosing Beacon Techh was one of the best decisions we've made for our company."`,
      name: "Fawad Khan Marwat",
      designation: "Ceo and Founder Castle Marketing.",
    },
    {
      img: "faheem.jpg",
      desc: `"Beacon Techh is simply exceptional. Their team's depth of knowledge and commitment to excellence have been instrumental in driving our success. Whether it's implementing complex software solutions or providing ongoing support, they always go above and beyond to ensure our needs are met. With Beacon Techh by our side, we feel confident in our ability to tackle any technological challenge that comes our way. They're more than just a service provider; they're a true partner in our growth and innovation."`,
      name: "Faheem Awan",
      designation: "CEO,Aeon Marketing Pvt.Ltd.",
    },
    {
      img: "miss-sumaira.png",
      desc: `"Beacon Techh has been an invaluable partner in streamlining our IT infrastructure. Their expertise and dedication have helped us navigate complex technological challenges with ease. Thanks to their innovative solutions, our productivity has soared, and our systems are more secure than ever. I highly recommend Beacon Techh to any business looking to stay ahead in today's fast-paced digital landscape."`,
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
