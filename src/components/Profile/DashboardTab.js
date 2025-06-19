"use client";

import React, { useState } from "react";
import ProductCard from "../Common/ProductCard";

const DashboardTab = () => {
  const [activeSubTab, setActiveSubTab] = useState("likes");

  // Dynamic mock data with tab-specific products
  const mockData = {
    likes: 15,
    visits: 42,
    ratingsReviews: 8,
    tabs: {
      likes: [
        { imageSrc: "/assets/images/brands/trello.webp", productName: "Trello", category: "Project management", badgeType: "free" },
        { imageSrc: "/assets/images/brands/notion.jpg", productName: "Notion", category: "Note taking", badgeType: "freemium" },
      ],
      reviews: [
        { imageSrc: "/assets/images/brands/slack.png", productName: "Slack", category: "Team communication", badgeType: "paid" },
        { imageSrc: "/assets/images/brands/asana.webp", productName: "Asana", category: "Task management", badgeType: "free_trial" },
      ],
      visits: [
        { imageSrc: "/assets/images/brands/onedrive.jpg", productName: "OneDrive", category: "Microsoft cloud storage", badgeType: "freemium" },
        { imageSrc: "/assets/images/brands/clockify.jpg", productName: "Clockify", category: "Time tracking", badgeType: "freemium" },
      ],
    },
  };

  return (
    <div className="space-y-6">
      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-[#0657D0]">Likes</h4>
          <p className="text-2xl font-bold text-[#817A99]">{mockData.likes}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-[#0657D0]">Visits</h4>
          <p className="text-2xl font-bold text-[#817A99]">{mockData.visits}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-[#0657D0]">Ratings & Reviews</h4>
          <p className="text-2xl font-bold text-[#817A99]">{mockData.ratingsReviews}</p>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="border-b border-gray-200">
        <ul className="flex space-x-4">
          {Object.keys(mockData.tabs).map((tab) => (
            <li key={tab} className="pb-2">
              <button
                onClick={() => setActiveSubTab(tab)}
                className={`text-sm font-medium ${
                  activeSubTab === tab ? "border-b-2 border-[#0657D0] text-[#0657D0]" : "text-[#7A7491] hover:text-[#0657D0]"
                } transition duration-200`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Products with Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockData.tabs[activeSubTab].map((product, index) => (
          <div
            key={index}
            className="transform transition duration-300 hover:scale-105"
          >
            <ProductCard
              imageSrc={product.imageSrc}
              productName={product.productName}
              category={product.category}
              badgeType={product.badgeType}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardTab;