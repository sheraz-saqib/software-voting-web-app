import React from "react";
import { CiShare1 } from "react-icons/ci";
import InnerProductCard from "../Common/InnerProductCard";

const ProductBanner = () => {
  // JSON data for productivity tools
  const productivityToolsData = [
    {
      imageSrc: "/assets/images/evernote.png",
      productName: "Evernote",
      category: "Note-taking",
      badgeType: "freemium"
    },
    {
      imageSrc: "/assets/images/asana.png",
      productName: "Asana",
      category: "Task management",
      badgeType: "freemium"
    },
    {
      imageSrc: "/assets/images/notion.png",
      productName: "Notion",
      category: "Workspace and note-taking",
      badgeType: "freemium"
    }
  ];

  return (
    <>
      <div className="px-3 md:px-6 flex bg-[#FEFEFE] max-md:flex-col">
        <div className="p-6 w-1/2 max-md:w-full">
          <div className="flex items-center space-x-2 mb-4  max-md:items-start max-md:space-y-2">
            <a href="#" className="hover:underline">
              {" "}
              &lt; Back
            </a>
            <span className="text-gray-500">Products &gt; Trello</span>
          </div>
          <div className="border border-[#075CD6] w-48 border-b-[1px] mb-4"></div>
          <div className="flex items-center justify-between max-md:flex-col max-md:items-start">
            <div className="relative flex max-md:w-full">
              <h1 className="text-4xl font-bold">Trello</h1>
              <span className="absolute -right-12 -top-1 flex justify-center items-center bg-[#075CD6] text-white text-xs font-medium px-3 py-1 rounded-full max-md:static max-md:ml-2">
                Free
              </span>
            </div>
          </div>
          <p className="mt-4 max-md:w-full">
            Introducing the work collection, a line of minimalistic bags designed
            for new generation specifically for the modern professionals.
          </p>
          <button className="flex items-center mt-4 bg-[#075CD6] text-white px-4 py-2 rounded hover:bg-blue-700 max-md:text-sm max-md:px-2 max-md:py-1">
            <span className="mr-2">
              <CiShare1 className="text-xl max-md:text-base" />
            </span>{" "}
            Open Site
          </button>
          <div className="mt-4 flex items-center space-x-4 text-gray-500 max-md:flex-col max-md:items-start max-md:space-x-0 max-md:space-y-2">
            <div className="flex items-center">
              <span className="text-yellow-400 text-2xl max-md:text-lg">★★★★★</span>
              <span className="ml-2">5</span>
            </div>
            <span className="max-md:hidden">|</span>
            <span>0 Reviews</span>
            <span className="max-md:hidden">|</span>
            <span>0 Saved</span>
          </div>
          <div className="mt-4 leading-9 max-md:w-full">
            <p>
              <strong className="text-xl mr-0 md:mr-3">Introduction:</strong> AI-driven
              invoice and receipt automation software
            </p>
            <p>
              <strong className="text-[#707070]">Added on:</strong> May 15 2025
            </p>
            <p>
              <strong className="text-[#707070] mr-3">Monthly Visitors:</strong> -
            </p>
            <p>
              <strong className="text-[#707070] mr-7">Social & Email:</strong> -
            </p>
            <div className="flex flex-wrap gap-2 mt-2 flex-row max-md:items-start">
              <button className="border text-gray-700 px-3 py-1 rounded-full text-sm">
                Website
              </button>
              <button className="border border-[#A6A6A6] text-[#707070] px-3 py-1 rounded-full text-sm">
                AI Productivity Tools
              </button>
              <button className="border border-[#A6A6A6] text-[#707070] px-3 py-1 rounded-full text-sm">
                AI Email Writer
              </button>
              <button className="border border-[#A6A6A6] text-[#707070] px-3 py-1 rounded-full text-sm">
                Tax Assistant
              </button>
              <button className="border border-[#A6A6A6] text-[#707070] px-3 py-1 rounded-full text-sm">
                AI Accounting Assistant
              </button>
            </div>
          </div>
        </div>
        {/* PRODUCT RIGHT IMAGE */}
        <div className="w-1/2 max-md:hidden">
          <img
            src="/assets/images/productimg.png"
            className="w-[48rem] h-auto"
            alt="product banner"
          />
        </div>
      </div>
      {/* Productivity Tools Section */}
      <div className="flex items-center px-2 md:px-3 bg-[#075CD6] w-full text-white py-2">
        {/* TOP NAVIGATION BAR */}
        <nav className="flex space-x-2.5 md:space-x-4 px-3 md:px-5 py-2  max-md:space-y-2 md:text-base text-xs">
          <a href="#productInfo" className="hover:underline">PRODUCT INFORMATION</a>
          <a href="#review" className="hover:underline">REVIEWS</a>
          <a href="#pricing" className="hover:underline">PRICING</a>
        </nav>

        {/* BELOW NAV: Cards + Image + Features */}
      
      </div>
    </>
  );
};

export default ProductBanner;