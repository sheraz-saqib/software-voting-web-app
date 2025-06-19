"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full px-4 lg:px-10 py-5 bg-transparent text-black z-20">
      <div
        className={`container mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center ${
          isOpen ? "bg-black border rounded-md p-4" : "bg-transparent"
        } md:bg-transparent md:border-none md:p-0 transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href="/">
            <div className="z-20 text-2xl font-bold">LOGO</div>
          </Link>

          <div className="md:hidden z-20">
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
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "block " : "hidden"
          } md:flex md:items-center mt-5 md:mt-0 md:space-x-12 w-full md:w-auto bg-transparent md:bg-transparent p-4 md:p-0 z-50 transition-all duration-300 ease-in-out`}
        >
          <Link
            href="/about"
            className="block md:inline-block py-2 md:py-0 hover:text-gray-900"
          >
            About Us
          </Link>
          <Link
            href="/products"
            className="block md:inline-block py-2 md:py-0 hover:text-gray-900"
          >
            Products
          </Link>
          <Link
            href="/category"
            className="block md:inline-block py-2 md:py-0 hover:text-gray-900"
          >
            Category
          </Link>
          <Link
            href="/ranking"
            className="block md:inline-block py-2 md:py-0 hover:text-gray-900"
          >
            Ranking
          </Link>
          <Link
            href="/contact"
            className="block md:inline-block py-2 md:py-0 hover:text-gray-900"
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="block md:inline-block py-2 md:py-0 hover:text-gray-900"
          >
            Login/SignUp
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
