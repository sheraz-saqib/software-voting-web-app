"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

const Header = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Animate logo
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    // Animate desktop nav links
    const navLinks = navRef.current?.querySelectorAll("a");
    if (navLinks) {
      gsap.fromTo(
        navLinks,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.3,
        }
      );
    }

    // Animate mobile menu when it opens
    if (isOpen && mobileMenuRef.current) {
      const mobileLinks = mobileMenuRef.current.querySelectorAll("a");
      gsap.fromTo(
        mobileLinks,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [isOpen]);

  const navLinks = [
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Ranking", path: "/ranking" },
    { name: "Contact", path: "/contact" },
    { name: "Login/SignUp", path: "/login" },
  ];

  return (
    <nav
      className={`w-full px-0 lg:px-10 py-0 lg:py-5 bg-transparent text-black z-20 ${className}`}
    >
      <div
        className={`container mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center ${
          isOpen ? "bg-white rounded-b-2xl p-4" : "bg-transparent"
        } md:bg-transparent md:p-0 transition-all duration-300 ease-in-out`}
      >
        {/* Top Row */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href="/">
            <div ref={logoRef} className="text-2xl font-bold">
              LOGO
            </div>
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

        {/* Mobile Nav — Only render when open */}
        {isOpen && (
          <div
            ref={mobileMenuRef}
            className="flex flex-col md:hidden w-full mt-4 space-y-2 transition-all duration-300 ease-in-out"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block py-2 hover:text-gray-900 transition-all duration-200 ${
                  pathname === link.path ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}

        {/* Desktop Nav */}
        <div
          ref={navRef}
          className="hidden md:flex md:items-center z-50 md:space-x-12"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`transition-all duration-200 ${
                pathname === link.path && pathname !== "/contact"
                  ? "text-blue-600 font-semibold"
                  : pathname === "/contact" && pathname === link.path
                  ? "text-black font-semibold"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;