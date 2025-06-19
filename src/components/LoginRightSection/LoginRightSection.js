'use client'
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginRightSection = () => {
  const router = useRouter();

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

      <div className="p-8 w-full max-w-xl bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Hello Again!</h2>
        <p className="text-black mb-6">Welcome Back</p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 px-5 border border-[#EEEEEE] rounded-full focus:outline-none"
              placeholder="Email Address"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-[#EEEEEE] px-5 rounded-full focus:outline-none"
              placeholder="Password"
            />
          </div>
          <a href="#" className="text-[#707070] text-sm py-1 block text-center">
            Forgot Password
          </a>
          <button
            type="submit"
            className="w-full bg-[#075CD6] text-white p-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
          <div className="text-center">
            <p className="text-[#707070] text-sm">
              Don’t have account?{" "}
              <Link href="/signup" className="font-bold text-[#075CD6]">
                Sign Up
              </Link>
            </p>
          </div>
        </form>

        {/* Social Logins */}
        <div className="flex justify-center space-x-4 mt-4">
          <button className="w-10 h-10 rounded-full flex items-center justify-center">
            <img src="/assets/images/google.png" alt="Google" className="w-8 h-8" />
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center">
            <img src="/assets/images/fb.png" alt="Facebook" className="w-8 h-8" />
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center">
            <img src="/assets/images/apple.png" alt="Apple" className="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginRightSection;
