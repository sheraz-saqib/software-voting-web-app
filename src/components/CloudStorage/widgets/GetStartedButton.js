import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const GetStartedButton = () => {
  return (
    <button className="bg-[#3A6EF2] cursor-pointer  text-white px-4 rounded-md mt-5 text-sm max-md:py-1.5 max-md:px-2 max-md:text-xs py-2.5  space-x-2 capitalize flex justify-center items-center">
      <span>get started now</span>{" "}
      <MdOutlineArrowOutward className="text-base max-md:text-sm" />
    </button>
  );
};

export default GetStartedButton;
