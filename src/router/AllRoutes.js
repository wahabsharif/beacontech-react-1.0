import React from "react";
// import Preview from "../views/Preview";
import HomeLightAnimation from "../views/all-home-version/HomeLightAnimation";
import HomeTyperCreative from "../views/all-home-version/HomeTyperCreative";
import HomeParallaxTyper from "../views/all-home-version/HomeParallaxTyper";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import Home from "../views/Home";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Preview />} /> */}
        <Route path="/home-light-animation" element={<HomeLightAnimation />} />
        <Route path="/home-typer-creative" element={<HomeTyperCreative />} />
        <Route path="/home-parallax-typer" element={<HomeParallaxTyper />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
