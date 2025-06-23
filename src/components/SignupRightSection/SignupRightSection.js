"use client";
import React from "react";
import { useRouter } from "next/navigation";

const SignupRightSection = () => {
  const router = useRouter();

  const socialLogins = [
    { src: "/assets/images/google.png", alt: "Google", size: "w-8 h-8" },
    { src: "/assets/images/fb.png", alt: "Facebook", size: "w-8 h-8" },
    { src: "/assets/images/apple.png", alt: "Apple", size: "w-10 h-10" },
  ];

  return (
    <div className="relative w-full md:w-1/2 h-screen flex items-center justify-center bg-white px-4">
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 cursor-pointer flex items-center"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </button>

      <div className="p-8 w-full max-w-md bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Hello!</h2>
        <p className="text-black mb-6">Sign Up to Get Started</p>

        <form className="space-y-4">
          <div className="relative">
            <input
              type="text"
              id="fullname"
              className="w-full p-4 px-10 text-sm border border-[#EEEEEE] rounded-full focus:outline-none"
              placeholder="Full Name"
            />
            <img
              src="/assets/images/user.png"
              alt="password"
              className="absolute top-4 left-3 w-5 h-5"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              className="w-full p-4 border px-10 text-sm border-[#EEEEEE] rounded-full focus:outline-none"
              placeholder="Email Address"
            />
            <img
              src="/assets/images/email.png"
              alt="password"
              className="absolute top-4 left-3 w-5 h-5"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              id="password"
              className="w-full p-4 border border-[#EEEEEE] px-10 text-sm rounded-full focus:outline-none"
              placeholder="Password"
            />
            <img
              src="/assets/images/password.png"
              alt="password"
              className="absolute top-4 left-3 w-5 h-5"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0575E6] cursor-pointer text-white p-3 rounded-full"
          >
            Register
          </button>
        </form>

        <div className="flex justify-center space-x-4 mt-4">
          {socialLogins.map((social, index) => (
            <button
              key={index}
              className=" cursor-pointer w-10 h-10 rounded-full flex items-center justify-center"
            >
              <img src={social.src} alt={social.alt} className={social.size} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignupRightSection;
