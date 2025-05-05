import React from 'react';

const FooterBottomSection = () => {
  return (
    <div className="flex w-4xl flex-col text-white">
      {/* Main Footer Content */}
      <div className="flex w-full flex-col lg:flex-row items-center justify-between px-6 py-4">
        <div className="flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-2 text-center lg:text-left">
          <p className="text-2xl sm:text-3xl font-medium">LOGO</p>
          <span className="hidden lg:block mr-0 lg:mr-5">|</span>
          <div className="w-full lg:w-80">
            <p className="text-xs sm:text-sm">Solutions that drive success and propel your business forward</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-end space-x-4 lg:space-x-6 text-xs sm:text-sm mt-4 lg:mt-0">
          <a href="#" className="hover:underline">Integration</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">Reviews</a>
        </div>
      </div>

      <hr className=" border-gray-400 mx-6" />

      <div className="flex w-full flex-col lg:flex-row items-center justify-between px-6 py-4 text-sm space-y-3 lg:space-y-0 text-center lg:text-left">
        <p className="text-xs sm:text-sm">
          Copyright © 2024 FramerBite. <br /> All Rights Reserved
        </p>

        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a href="#" className="hover:text-gray-300">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.265.058-1.645.069-4.849.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.265-.058 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-1.627.073-2.957.414-4.02 1.477-1.063 1.063-1.404 2.393-1.477 4.02-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.073 1.627.414 2.957 1.477 4.02 1.063 1.063 2.393 1.404 4.02 1.477 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.627-.073 2.957-.414 4.02-1.477 1.063-1.063 1.404-2.393 1.477-4.02.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.073-1.627-.414-2.957-1.477-4.02-1.063-1.063-2.393-1.404-4.02-1.477-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm0 9.834c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm4.8-8.667c-.776 0-1.4-.624-1.4-1.4s.624-1.4 1.4-1.4 1.4.624 1.4 1.4-.624 1.4-1.4 1.4z" />
            </svg>
          </a>
          <a href="#" className="hover:text-gray-300">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="#" className="hover:text-gray-300">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-9.019-7.619-11.018-3.869v-2zm-7.982 0h-5v16h5v-16z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottomSection;