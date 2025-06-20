import React from "react";
import Heading from "../Common/Heading";
import { CiStar } from "react-icons/ci";

const ProductReview = () => {
  return (
    <div className="bg-[#F3F8FE] px-3 sm:px-6 md:px-12 py-8 w-full">
      <Heading
        fontSize="font-semibold"
        textSize="text-2xl md:text-4xl"
        className="mb-4"
        text="REVIEWS"
      />
<div className="px-2 md:px-7">
      <div className="bg-white rounded-2xl p-4 md:p-6 shadow-md border mx-auto">
        {/* Rating */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div className="flex items-center mb-2 sm:mb-0">
            <span className="text-yellow-400 text-xl sm:text-2xl">★★★★★</span>
            <span className="ml-2 text-gray-600 text-sm sm:text-base">
              5 Point out of 5 point
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-4"></div>

        {/* Prompt */}
        <p className="text-gray-600 mb-2 text-sm sm:text-base">
          Would you recommend review? Leave a comment
        </p>

        {/* Star Ratings */}
        <div className="flex space-x-1 mb-3 text-[#969696] text-xl sm:text-2xl">
          {[...Array(5)].map((_, index) => (
            <CiStar key={index} />
          ))}
        </div>

        {/* Comment Input */}
        <div className="flex flex-col sm:flex-row gap-3 items-start">
          <div className="w-10 h-10 bg-[#D9D9D9] rounded-full shrink-0"></div>
          <textarea
            className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            placeholder="What do you think?"
          ></textarea>
        </div>

        {/* Button */}
        <div className="mt-4">
          <button className="bg-[#075CD6] text-white px-4 py-2 rounded hover:bg-blue-700 text-sm sm:text-base">
            Login to comment
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductReview;
