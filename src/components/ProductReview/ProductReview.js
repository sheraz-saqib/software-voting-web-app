'use client'
import React, { useState } from "react";
import Heading from "../Common/Heading";
import { CiStar } from "react-icons/ci";

const ProductReview = () => {
  const [activeTab, setActiveTab] = useState("reviews");

  // Sample reviews data
  const reviews = [
    {
      id: 1,
      user: "John Doe",
      rating: 5,
      comment: "Excellent product! Really satisfied with the quality and delivery.",
      date: "2025-06-20",
    },
    {
      id: 2,
      user: "Jane Smith",
      rating: 4,
      comment: "Very good product, but shipping took a bit longer than expected.",
      date: "2025-06-18",
    },
    {
      id: 3,
      user: "Mike Johnson",
      rating: 5,
      comment: "Amazing experience! Will definitely buy again.",
      date: "2025-06-15",
    },
  ];

  return (
    <div id="review" className="bg-[#F3F8FE] px-3 sm:px-6 md:px-12 py-8 w-full">
      <Heading
        fontSize="font-semibold"
        textSize="text-2xl md:text-4xl"
        className="mb-6"
        text="REVIEWS & FEEDBACK"
      />

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6 px-2 md:px-7">
        <button
          className={`px-4 py-2 text-sm md:text-base font-medium ${
            activeTab === "reviews"
              ? "border-b-2 border-[#075CD6] text-[#075CD6]"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
        <button
          className={`px-4 py-2 text-sm md:text-base font-medium ${
            activeTab === "feedback"
              ? "border-b-2 border-[#075CD6] text-[#075CD6]"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("feedback")}
        >
          Leave Feedback
        </button>
      </div>

      <div className="px-2 md:px-7">
        {activeTab === "reviews" ? (
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-md border mx-auto">
            <div className="flex items-center mb-4">
              <span className="text-yellow-400 text-xl sm:text-2xl">★★★★★</span>
              <span className="ml-2 text-gray-600 text-sm sm:text-base">
                4.8 Average Rating ({reviews.length} reviews)
              </span>
            </div>

            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-[#D9D9D9] rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium text-sm md:text-base">
                        {review.user}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {new Date(review.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400 text-lg">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
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
            <div className="border-t border-gray-200 mb-4"></div>

            {/* Prompt */}
            <p className="text-gray-600 mb-3 text-sm sm:text-base">
              Would you recommend this product? Share your feedback
            </p>

            {/* Star Ratings */}
            <div className="flex space-x-1 mb-4 text-[#969696] text-xl sm:text-2xl">
              {[...Array(5)].map((_, index) => (
                <CiStar
                  key={index}
                  className="cursor-pointer hover:text-yellow-400"
                />
              ))}
            </div>

            {/* Comment Input */}
            <div className="flex flex-col sm:flex-row gap-3 items-start">
              <div className="w-10 h-10 bg-[#D9D9D9] rounded-full shrink-0"></div>
              <textarea
                className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base resize-none"
                placeholder="Share your thoughts about the product..."
              ></textarea>
            </div>

            {/* Button */}
            <div className="mt-4">
              <button className="bg-[#075CD6] text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-sm sm:text-base transition-colors duration-200">
                Submit Feedback
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductReview;