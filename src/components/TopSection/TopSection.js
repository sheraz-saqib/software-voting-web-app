import React from "react";
import Header from "../Header/Header";
import Brand from "./Brand";

const TopSection = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat  "
      style={{ backgroundImage: "url('/assets/images/banner-image.webp')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-white to-white opacity-90 "></div>
      <Header />
      <Brand />
    </div>
  );
};

export default TopSection;
