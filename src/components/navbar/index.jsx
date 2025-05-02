'use client'
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full px-1 lg:px-10 py-5 bg-transparent text-white z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          LOGO
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-transparent p-4 md:p-0 z-10 transition-all duration-300 ease-in-out`}
        >
          <a href="#" className="block md:inline-block py-2 md:py-0 hover:text-gray-300">
            Home
          </a>
          <a href="#" className="block md:inline-block py-2 md:py-0 hover:text-gray-300">
            Services
          </a>
          <a href="#" className="block md:inline-block py-2 md:py-0 hover:text-gray-300">
            Portfolio
          </a>
          <a href="#" className="block md:inline-block py-2 md:py-0 hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;