import React from "react";
import LogoMarqee from "../Common/LogoMarqee";

const Brand = () => {
  return (
    <div className="px-2 flex justify-center items-center min-h-screen  text-black text-center relative overflow-hidden">
      <div className="z-10">
        <h1 className="text-3xl lg:text-7xl font-bold leading-tight">
          <span className="block">Elevate Your Brand With</span>
          <span className="block">
            <span className="font-light Galada-Regular">
              Subscription Design{" "}
            </span>
            <span className="font-bold text-black">Services</span>
          </span>
        </h1>

        <p className="mt-4 text-sm lg:text-base  max-w-xl mx-auto text-black">
          Our team of creative experts delivers stunning, high-quality designs
          tailored to your needs, ensuring your brand stands out in a crowded
          market.
        </p>
        <button className="mt-6 cursor-pointer text-sm text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-gray-900 transition">
          Get Start Now
        </button>
        <p className="mt-30 mb-10 text-sm text-black">
          Trusted by leading brands:
        </p>
      <LogoMarqee />

      </div>
    </div>
  );
};

export default Brand;
