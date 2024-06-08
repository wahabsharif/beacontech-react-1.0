import React, { Suspense } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const projects = [
  { src: "/img/projects-delivered/5-zone.png", alt: "5 Zone" },
  {
    src: "/img/projects-delivered/abdul-salam-jewelers.png",
    alt: "Abdul Salam Jewelers",
  },
  { src: "/img/projects-delivered/aeon-marketing.png", alt: "Aeon Marketing" },
  {
    src: "/img/projects-delivered/ahsan-enterprises.png",
    alt: "Ahsan Enterprises",
  },
  {
    src: "/img/projects-delivered/ally-properties.png",
    alt: "Ally Properties",
  },
  {
    src: "/img/projects-delivered/amanat-properties.png",
    alt: "Amanat Properties",
  },
  {
    src: "/img/projects-delivered/askari-general-insurance.png",
    alt: "Askari General Insurance",
  },
  { src: "/img/projects-delivered/bari-and-sons.png", alt: "Bari and Sons" },
  {
    src: "/img/projects-delivered/brick-land-marketing.png",
    alt: "Brick Land Marketing",
  },
  { src: "/img/projects-delivered/bunyad.png", alt: "Bunyad" },
  { src: "/img/projects-delivered/capital-valley.png", alt: "Capital Valley" },
  {
    src: "/img/projects-delivered/castle-marketing.png",
    alt: "Castle Marketing",
  },
  {
    src: "/img/projects-delivered/deans-residencia.png",
    alt: "Deans Residencia",
  },
  { src: "/img/projects-delivered/dollar-shop.png", alt: "Dollar Shop" },
  { src: "/img/projects-delivered/elanza-mall.png", alt: "Elanza Mall" },
  { src: "/img/projects-delivered/glorious.png", alt: "Glorious" },
  {
    src: "/img/projects-delivered/goga-car-clasic.png",
    alt: "Goga Car Classic",
  },
  { src: "/img/projects-delivered/japan-city.png", alt: "Japan City" },
  { src: "/img/projects-delivered/mart-plus.png", alt: "Mart Plus" },
  { src: "/img/projects-delivered/model-town-wah.png", alt: "Model Town Wah" },
  { src: "/img/projects-delivered/mountain-leaf.png", alt: "Mountain Leaf" },
  { src: "/img/projects-delivered/pak-austria.png", alt: "Pak Austria" },
  { src: "/img/projects-delivered/perl-kami.png", alt: "Perl Kami" },
  { src: "/img/projects-delivered/property-panda.png", alt: "Property Panda" },
  {
    src: "/img/projects-delivered/castle-marketing-white.png",
    alt: "Castle Marketing White",
  },
  {
    src: "/img/projects-delivered/rifah-university.png",
    alt: "Rifah University",
  },
  { src: "/img/projects-delivered/statesmen.png", alt: "Statesmen" },
  {
    src: "/img/projects-delivered/thrift-fragnance.png",
    alt: "Thrift Fragrance",
  },
  { src: "/img/projects-delivered/thrift-shop.png", alt: "Thrift Shop" },
  { src: "/img/projects-delivered/travel-time.png", alt: "Travel Time" },
  { src: "/img/projects-delivered/vapeistan.png", alt: "Vapeistan" },
  {
    src: "/img/projects-delivered/zabist-university.png",
    alt: "Zabist University",
  },
];

const ProjectDelivered = () => {
  return (
    <>
      <div className="slider_title">
        <h2>Projects Delivered</h2>
      </div>
      <div className="slider">
        <div className="slide-track">
          {projects.map((project, index) => (
            <div className="slide" key={index}>
              <img
                src={project.src}
                height={100}
                width={"auto"}
                alt={project.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectDelivered;
