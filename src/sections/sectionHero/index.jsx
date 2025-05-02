import React from 'react';

const SectionHero = () => {
  return (
    <div className="px-2 flex justify-center items-center min-h-screen  text-white text-center relative overflow-hidden">
      <div className="z-10">
        <h1 className="text-3xl lg:text-7xl font-extrabold leading-tight">
          <span className="block">Elevate Your Brand With</span>
          <span className="block italic galada-regular">
            Subscription Design <span className="font-normal">Services</span>
          </span>
        </h1>
        <p className="mt-4 text-sm lg:text-base  max-w-2xl mx-auto text-gray-300">
          Our team of creative experts delivers stunning, high-quality designs tailored to your needs, ensuring your brand stands out in a crowded market.
        </p>
        <button className="mt-6 text-sm bg-white text-gray-900 px-4 py-1 rounded-md font-medium hover:bg-gray-200 transition">
          Get Start Now
        </button>
        <p className="mt-30 text-sm text-gray-400">
          Trusted by leading brands:
        </p>
      </div>
    </div>
  );
};

export default SectionHero;