"use client";

import PeraContent from "@/components/Common/PeraContent";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import FilterDropdown from "@/components/FilterDropdown";
import React, { useState } from "react";
import ProductCard from "@/components/Common/ProductCard";

const Products = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedSubscriptions, setSelectedSubscriptions] = useState([]);

  const handleFilterChange = (type, values) => {
    if (type === "categories") {
      setSelectedCategories(values);
      console.log("Selected Categories:", values);
    } else if (type === "ratings") {
      setSelectedRatings(values);
      console.log("Selected Ratings:", values);
    } else if (type === "subscriptions") {
      setSelectedSubscriptions(values);
      console.log("Selected Subscriptions:", values);
    }
  };

  // Mock data structured as per your JSON format
  const products = [
    {
      category_name: "FEATURE",
      data: [
        {
          imageSrc: "/assets/images/brands/trello.webp",
          productName: "Trello",
          category: "Project management",
          badgeType: "free",
        },
        {
          imageSrc: "/assets/images/brands/trello.webp",
          productName: "Zoho CRM",
          category: "Sales automation",
          badgeType: "free_trial",
        },
        {
          imageSrc: "/assets/images/brands/trello.webp",
          productName: "OneDrive",
          category: "Microsoft cloud storage",
          badgeType: "freemium",
        },
        {
          imageSrc: "/assets/images/brands/trello.webp",
          productName: "Clockify",
          category: "Time tracking",
          badgeType: "freemium",
        },
      ],
    },
    {
      category_name: "PRODUCTIVITY TOOLS",
      data: [
        {
          imageSrc: "/assets/images/brands/trello.webp",
          productName: "Trello",
          category: "Project management",
          badgeType: "free",
        },
        {
          imageSrc: "/assets/images/brands/trello.webp",
          productName: "Notion",
          category: "Note taking",
          badgeType: "freemium",
        },
        {
          imageSrc: "/assets/images/brands/trello.webp",
          productName: "Slack",
          category: "Team communication",
          badgeType: "paid",
        },
        {
          imageSrc: "/assets/images/brands/trello.webp",
          productName: "Asana",
          category: "Task management",
          badgeType: "free_trial",
        },
      ],
    },
    {
      category_name: "CLOUD STORAGE & FILE SHARING",
      data: [
        {
          imageSrc: "/assets/images/brands/trello.webp",
          productName: "OneDrive",
          category: "Microsoft cloud storage",
          badgeType: "freemium",
        },
        {
          imageSrc: "/assets/images/brands/trello.webp",
          productName: "Google Drive",
          category: "Cloud storage",
          badgeType: "free",
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-[#F2F9FE] py-10 px-4 sm:px-6 md:px-10">
        {/* header */}
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-5xl font-bold " >
            <span className=" bg-clip-text text-transparent" style={{
  background: 'linear-gradient(90deg, #817A99 0%, #0657D0 100%)',
  WebkitBackgroundClip: 'text', 
}}>Welcome</span>{" "}
            <span className="text-black">to</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-black mt-2">
            Freemium Products
          </h2>
          <PeraContent
            className="text-sm sm:text-base md:text-lg text-[#7A7491]"
            text={
              "Lorem ipsum dolor sit amet consectetur. Vel tristique sapien dignissim sit platea urna vel aliquet. Ridiculus vitae eu lectus quam mus non sit morbi."
            }
          />
          {/* search bar and filter */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <div className="relative w-full max-w-xl bg-white rounded-full">
              <input
                placeholder="Search Here"
                className="rounded-full w-full h-14 bg-transparent py-2 pl-8 pr-32 outline-none border border-[#F0EEF4] hover:outline-none"
                type="text"
                name="query"
                id="query"
              />
              <button
                type="submit"
                className="absolute inline-flex items-center h-11.5 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-1.5 top-1/2 -translate-y-1/2 bg-[#075CD6] sm:px-2 sm:pl-6 sm:text-base sm:font-medium"
              >
                Search
                <svg
                  className="ml-2 sm:ml-2 mr-2 w-4 h-4 sm:h-5 sm:w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <FilterDropdown
              selectedCategories={selectedCategories}
              selectedRatings={selectedRatings}
              selectedSubscriptions={selectedSubscriptions}
              onFilterChange={handleFilterChange}
            />
          </div>
          {/* Product Sections */}
          <div className="mt-12">
            {products.map((category, index) => (
              <div key={index} className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent" style={{
  background: 'linear-gradient(90deg, #817A99 0%, #0657D0 100%)',
  WebkitBackgroundClip: 'text', 
}}>
  {category.category_name} /
</h3>
                  <a href="#" className="text-blue-600 hover:underline text-sm">See More</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                  {category.data.map((tool, idx) => (
                    <ProductCard
                      key={idx}
                      imageSrc={tool.imageSrc}
                      productName={tool.productName}
                      category={tool.category}
                      badgeType={tool.badgeType}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;