"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import DashboardTab from "@/components/Profile/DashboardTab";
import ProfileTab from "@/components/Profile/ProfileTab";
import PrivacySecurityTab from "@/components/Profile/PrivacySecurityTab";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // Add logout logic here (e.g., clear session, redirect to login)
    router.push("/login");
  };

  const handleHome = () => {
    router.push("/"); // Redirect to home page
  };

  return (
    <div className="flex h-screen bg-[#F2F9FE] font-sans">
      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-[#0657D0] focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <h2 className="text-xl font-semibold text-[#0657D0]">Profile</h2>
        <div className="flex space-x-4">
          <button
            onClick={handleHome}
            className="text-[#0657D0] hover:text-[#0549a6] transition duration-200"
          >
            Home
          </button>
          <button
            onClick={handleLogout}
            className="text-red-600 hover:text-red-800 transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full bg-white shadow-lg p-6 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-64 z-40`}
      >
        <div className="mb-8">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent mb-6" style={{
            background: 'linear-gradient(90deg, #817A99 0%, #0657D0 100%)',
            WebkitBackgroundClip: 'text',
          }}>
            Profile
          </h2>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => { setActiveTab("dashboard"); setIsSidebarOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-lg text-lg ${
                  activeTab === "dashboard" ? "bg-[#E6F0FA] text-[#0657D0]" : "text-[#7A7491] hover:bg-[#E6F0FA]"
                } transition duration-200`}
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => { setActiveTab("profile"); setIsSidebarOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-lg text-lg ${
                  activeTab === "profile" ? "bg-[#E6F0FA] text-[#0657D0]" : "text-[#7A7491] hover:bg-[#E6F0FA]"
                } transition duration-200`}
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => { setActiveTab("privacy"); setIsSidebarOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-lg text-lg ${
                  activeTab === "privacy" ? "bg-[#E6F0FA] text-[#0657D0]" : "text-[#7A7491] hover:bg-[#E6F0FA]"
                } transition duration-200`}
              >
                Privacy & Security
              </button>
            </li>
            <li>
              <button
                onClick={() => { handleLogout(); setIsSidebarOpen(false); }}
                className="w-full text-left px-4 py-3 rounded-lg text-lg text-red-600 hover:bg-red-100 transition duration-200"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 pt-20 md:pt-6 overflow-y-auto">
        <div className="md:block hidden mb-4">
          <button
            onClick={handleHome}
            className="text-[#0657D0] hover:text-[#0549a6] underline transition duration-200"
          >
            Back to Home
          </button>
        </div>
        {activeTab === "dashboard" && <DashboardTab />}
        {activeTab === "profile" && <ProfileTab />}
        {activeTab === "privacy" && <PrivacySecurityTab />}
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Profile;