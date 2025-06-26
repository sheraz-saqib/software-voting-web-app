'use client'
import React from "react";
import NewBanner from "./NewBanner";
import LeftContentSection from "./LeftContentSection";
import Link from "next/link";

const LeftSection = () => {
  return (
    <div className="w-full h-full flex justify-center items-start flex-col space-y-5">
      <NewBanner />
      <LeftContentSection />

      <Link href="/category" 
        className="relative inline-block px-6 py-2 font-medium bg-gradient-to-r from-[#6BA6FF] to-[#D1E4FF] rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-[#75ACFF]">
          <span className="relative z-10">Category</span>
      </Link>
    </div>
  );
};

export default LeftSection;
