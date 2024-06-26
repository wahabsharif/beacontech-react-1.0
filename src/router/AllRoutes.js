import React from "react";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import Home from "../views/Home";
import BusinessRevamp from "../views/business-revamp";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business-revamp" element={<BusinessRevamp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
