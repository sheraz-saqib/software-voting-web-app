import React from "react";
import NewBanner from "./NewBanner";
import LeftContentSection from "./LeftContentSection";
import Link from "next/link";

const LeftSection = () => {
  return (
    <div className="w-full h-full flex justify-center items-start flex-col space-y-5">
      <NewBanner />
      <LeftContentSection />
      <div className="mt-8 space-x-4 max-md:mt-0">
        <Link
          style={{
            background: "linear-gradient(180deg, #78AEFF 0%, #388EFF 100%)",
          }}
          href={"#"}
          className="text-white capitalize px-4 py-3 rounded-full text-sm max-md:px-3 max-md:py-2 max-md:text-xs"
        >
          See in Action
        </Link>
        {/* second button */}
        <Link
          href={"#"}
          className="capitalize px-4 py-3 rounded-full text-sm border border-gray-700 text-black max-md:px-3 max-md:text-xs max-md:py-2"
        >
          View demo
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex -space-x-3">
          <img
            src="/assets/images/rating1.png"
            alt="Profile 1"
            className="w-12 h-12 rounded-full border-none"
          />
          <img
            src="/assets/images/rating1.png"
            alt="Profile 2"
            className="w-12 h-12 rounded-full border-none"
          />
          <img
            src="/assets/images/rating1.png"
            alt="Profile 3"
            className="w-12 h-12 rounded-full border-none"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xl">★★★★★</span>
          <span className=" text-[#636363] md:text-base text-sm">200+ businesses scale</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
