import React from 'react';
import Heading from '../Common/Heading';

const ReviewSection = () => {
  return (
    <div className="flex flex-col lg:flex-row py-16 bg-gradient-to-br from-blue-50 to-indigo-100 w-full overflow-hidden">
      {/* Left Section: Review Input */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-8 lg:p-12">
        <div className="max-w-lg animate-fade-in-up">
          <Heading
            textSize="text-3xl lg:text-5xl"
            text="Hear What Our<br/>Customers Love About Us"
            className="text-gray-800 font-bold leading-tight"
          />
          <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
            <input
              type="text"
              placeholder="Share your experience..."
              className="text-sm p-4 border border-gray-200 rounded-lg bg-white w-full lg:w-2/3 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-300"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold p-4 rounded-lg w-full lg:w-1/3 shadow-md transform hover:scale-105 transition-all duration-300">
              Submit Review
            </button>
          </div>
          <a
            href="#"
            className="text-indigo-600 font-medium mt-4 inline-block hover:underline hover:text-indigo-800 transition-colors duration-300"
          >
            Explore All Reviews →
          </a>
        </div>
      </div>

      {/* Right Section: Featured Reviews */}
      <div className="flex-1 bg-gradient-to-tr from-indigo-200 to-blue-200 flex items-center justify-center p-8 lg:p-12 relative">
        <div className="bg-white rounded-2xl w-full max-w-2xl shadow-xl relative z-20 p-6 animate-fade-in-right">
          <div className="mb-4">
            <p className="text-gray-800 text-xl font-semibold">Top-Rated Reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg">
            <div className="bg-white border border-gray-100 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-lg font-medium text-gray-800 italic">"Exceptional service, truly transformative!"</p>
              <p className="text-sm text-gray-500 mt-2">— Sarah K., CEO at FintechPro</p>
              <div className="h-16 mt-4">
                <img
                  src="https://cdn.pixabay.com/photo/2023/11/10/02/30/woman-8378634_1280.jpg"
                  alt="Sarah K."
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="bg-white border border-gray-100 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-lg font-medium text-gray-800 italic">"Accelerated our growth like never before."</p>
              <p className="text-sm text-gray-500 mt-2">— James T., Co-founder of TechStart</p>
              <div className="h-16 mt-4">
                <img
                  src="https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_1280.jpg"
                  alt="James T."
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute z-30 bottom-4 right-4 lg:right-16 bg-indigo-600 rounded-full w-16 h-16 flex items-center justify-center shadow-lg animate-pulse">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/31/14/33/award-2026283_1280.png"
            alt="Verified Badge"
            className="w-8 h-8"
          />
        </div>
        <div className="absolute top-4 right-4 lg:right-16 opacity-20">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/10/02/05/tiles-shapes-2617112_1280.jpg"
            alt="Background Pattern"
            className="w-24 h-24 lg:w-36 lg:h-36"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;