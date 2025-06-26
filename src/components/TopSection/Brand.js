import React from "react";
import LogoMarqee from "../Common/LogoMarqee";
import GetStartedButton from "../CloudStorage/widgets/GetStartedButton";

const Brand = () => {
  return (
    <div className=" flex justify-center items-center  min-h-[calc(100vh-4.5rem)]   text-black text-center relative overflow-hidden">
      <div className="z-10 flex jucstify-center items-center flex-col">
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
               <GetStartedButton/>

        <p className="mt-30 mb-10 text-sm text-black">
          Trusted by leading brands:
        </p>
      

      </div>
      <div className="absolute bottom-0 w-full left-0">
        
        <LogoMarqee />
      </div>
    </div>
  );
};

export default Brand;
