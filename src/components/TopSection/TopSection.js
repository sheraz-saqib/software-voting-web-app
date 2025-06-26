import React from "react";
import Header from "../Header/Header";
import Brand from "./Brand";

const TopSection = () => {
  return (
    <>
    

    <div
      className="relative min-h-[calc(100vh)] bg-cover bg-center bg-no-repeat  "
      style={{ backgroundImage: "url('/assets/images/banner-image-2.webp')" }}
    >
        <Header />
      <Brand />
    </div>
    
    </>
    
  );
};

export default TopSection;
