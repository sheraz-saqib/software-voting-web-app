import React from "react";
import Heading from "../Common/Heading";
import PeraContent from "../Common/PeraContent";
import LogoMarqee from "../Common/LogoMarqee";

const AboutSection = () => {
  return (
    <div className=" flex flex-col min-h-screen bg-[#F2F9FE]">
      <div className="mt-0  md:mt-24 flex flex-col justify-center items-center flex-1 w-full">
        <Heading fontSize="font-semibold" className="" text={"About Us"} />
        <PeraContent
          className="flex justify-center items-center text-black"
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
      </div>

      {/* ABOUT IMAGES */}

      <div className="px-3 flex justify-center items-center w-full my-10">
        <div className="grid grid-cols-3 md:grid-cols-5 md:gap-4 gap-2 justify-items-center w-fit">
          <div className="hidden md:block col-span-1 mt-24">
            <img
              src="/assets/images/aboutImg1.png"
              className="rounded-lg w-56 h-32 object-cover transition-transform duration-500 hover:scale-105"
              alt="About Image 1"
            />
          </div>
          <div className="col-span-1 mt-6 md:mt-12 md:space-y-4 space-y-2">
            <img
              src="/assets/images/aboutImg6.png"
              className="rounded-lg w-56 h-24 md:h-32 object-cover transition-transform duration-500 hover:scale-105"
              alt="About Image 6"
            />
            <img
              src="/assets/images/aboutImg5.png"
              className="rounded-lg w-56 h-24 md:h-32 object-cover transition-transform duration-500 hover:scale-105"
              alt="About Image 5"
            />
          </div>
          <div className="col-span-1 md:mt-0 mt-6">
            <img
              src="/assets/images/aboutImg4.png"
              className="rounded-lg w-52 h-50 md:h-96 object-cover transition-transform duration-500 hover:scale-105"
              alt="About Image 4"
            />
          </div>
          <div className="col-span-1 mt-6 space-y-2 md:space-y-4">
            <img
              src="/assets/images/aboutImg3.png"
              className="rounded-lg w-56 h-24 md:h-32 object-cover transition-transform duration-500 hover:scale-105"
              alt="About Image 3"
            />
            <img
              src="/assets/images/aboutImg2.png"
              className="rounded-lg w-56 h-24 md:h-32 object-cover transition-transform duration-500 hover:scale-105"
              alt="About Image 2"
            />
          </div>
          <div className="hidden md:block col-span-1 mt-24">
            <img
              src="/assets/images/aboutImg1.png"
              className="rounded-lg w-56 h-32 object-cover transition-transform duration-500 hover:scale-105"
              alt="About Image 1"
            />
          </div>
        </div>
      </div>
      <div className=" my-12">
      <LogoMarqee />
      </div>
      
    </div>
  );
};

export default AboutSection;