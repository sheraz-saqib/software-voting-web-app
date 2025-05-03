import React from "react";

const Brand = () => {
  return (
    <div className="px-2 flex justify-center items-center min-h-screen  text-white text-center relative overflow-hidden">
      <div className="z-10">
        <h1 className="text-3xl lg:text-7xl font-bold leading-tight">
          <span className="block">Elevate Your Brand With</span>
          <span className="block">
            <span className="font-light Galada-Regular">
              Subscription Design{" "}
            </span>
            <span className="font-bold text-white">Services</span>
          </span>
        </h1>

        <p className="mt-4 text-sm lg:text-base  max-w-xl mx-auto text-gray-300">
          Our team of creative experts delivers stunning, high-quality designs
          tailored to your needs, ensuring your brand stands out in a crowded
          market.
        </p>
        <button className="mt-6 text-sm bg-white text-black px-4 py-1.5 rounded-md hover:bg-gray-200 transition">
          Get Start Now
        </button>
        <p className="mt-30 text-sm text-gray-400">
          Trusted by leading brands:
        </p>
      </div>
    </div>
  );
};

export default Brand;
