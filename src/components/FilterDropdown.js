"use client";

import React, { useState } from "react";

const FilterDropdown = ({
  selectedCategories,
  selectedRatings,
  selectedSubscriptions,
  onFilterChange,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [openTab, setOpenTab] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Mock JSON array for categories (simulating API data)
  const categories = [
    "Technology",
    "Education",
    "Lifestyle",
    "Business",
    "Health",
    "Fitness",
    "Travel",
    "Finance",
    "Entertainment",
    "Productivity",
    "Gaming",
    "Education Tech",
    "E-commerce",
    "Social Media",
    "AI Tools",
  ];

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    setSearchTerm(""); // Reset search term when closing/opening
  };

  const handleTabToggle = (tab) => {
    setOpenTab(openTab === tab ? null : tab);
    setSearchTerm(""); // Reset search term when switching tabs
  };

  const handleCheckboxChange = (type, e) => {
    const value = e.target.value;
    let updatedValues;
    let currentValues;

    if (type === "categories") {
      currentValues = selectedCategories;
    } else if (type === "ratings") {
      currentValues = selectedRatings;
    } else if (type === "subscriptions") {
      currentValues = selectedSubscriptions;
    }

    if (e.target.checked) {
      updatedValues = [...currentValues, value];
    } else {
      updatedValues = currentValues.filter((item) => item !== value);
    }

    onFilterChange(type, updatedValues);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter categories based on search term
  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      <button
        onClick={toggleFilter}
        className="flex items-center h-14 px-6 py-2 text-sm sm:text-base font-medium text-[#075CD6] bg-white border border-[#F0EEF4] rounded-full hover:bg-[#E6F0FA] transition duration-150 ease-in-out"
      >
        Filter
        <svg
          className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 14.414V20a1 1 0 01-1.447.894l-4-2A1 1 0 017 18v-3.586L3.293 6.707A1 1 0 013 6V4z"
          />
        </svg>
      </button>
      {isFilterOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-10 sm:w-80">
          <h3 className="text-lg font-semibold text-[#5C70A9] mb-3">Sort By</h3>
          <div className="space-y-2">
            {/* Category */}
            <div>
              <button
                onClick={() => handleTabToggle("category")}
                className="w-full flex justify-between items-center text-left text-sm sm:text-base text-[#7A7491] hover:text-[#075CD6] py-2 px-3 rounded-md hover:bg-[#F2F9FE] transition"
              >
                Category
                <span className="text-xs text-[#075CD6]">
                  {selectedCategories.length > 0 && `(${selectedCategories.length})`}
                </span>
              </button>
              {openTab === "category" && (
                <div className="ml-4 mt-2 max-h-[50vh]">
                  <div className="sticky top-0 bg-white z-10 mb-3">
                    <input
                      type="text"
                      placeholder="Search categories..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      className="w-full px-3 py-2 text-sm text-[#7A7491] border border-[#F0EEF4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#075CD6]"
                    />
                  </div>
                  <div className="max-h-[calc(50vh-60px)] overflow-y-auto scrollbar-thin scrollbar-thumb-[#075CD6] scrollbar-track-[#F2F9FE]">
                    {filteredCategories.length > 0 ? (
                      filteredCategories.map((category) => (
                        <label
                          key={category}
                          className="flex items-center text-sm text-[#7A7491] py-1 px-3 rounded-md hover:bg-[#F2F9FE] transition"
                        >
                          <input
                            type="checkbox"
                            value={category}
                            checked={selectedCategories.includes(category)}
                            onChange={(e) => handleCheckboxChange("categories", e)}
                            className="mr-2 h-4 w-4 text-[#075CD6] border-[#F0EEF4] rounded"
                          />
                          {category}
                        </label>
                      ))
                    ) : (
                      <p className="text-sm text-[#7A7491] px-3">No categories found</p>
                    )}
                  </div>
                </div>
              )}
            </div>
            {/* Rating */}
            <div>
              <button
                onClick={() => handleTabToggle("rating")}
                className="w-full flex justify-between items-center text-left text-sm sm:text-base text-[#7A7491] hover:text-[#075CD6] py-2 px-3 rounded-md hover:bg-[#F2F9FE] transition"
              >
                Rating
                <span className="text-xs text-[#075CD6]">
                  {selectedRatings.length > 0 && `(${selectedRatings.length})`}
                </span>
              </button>
              {openTab === "rating" && (
                <div className="ml-4 mt-2 space-y-1">
                  {["5 Stars", "4 Stars", "3 Stars"].map((rating) => (
                    <label
                      key={rating}
                      className="flex items-center text-sm text-[#7A7491] py-1 px-3 rounded-md hover:bg-[#F2F9FE] transition"
                    >
                      <input
                        type="checkbox"
                        value={rating}
                        checked={selectedRatings.includes(rating)}
                        onChange={(e) => handleCheckboxChange("ratings", e)}
                        className="mr-2 h-4 w-4 text-[#075CD6] border-[#F0EEF4] rounded"
                      />
                      {rating}
                    </label>
                  ))}
                </div>
              )}
            </div>
            {/* Subscription */}
            <div>
              <button
                onClick={() => handleTabToggle("subscription")}
                className="w-full flex justify-between items-center text-left text-sm sm:text-base text-[#7A7491] hover:text-[#075CD6] py-2 px-3 rounded-md hover:bg-[#F2F9FE] transition"
              >
                Subscription
                <span className="text-xs text-[#075CD6]">
                  {selectedSubscriptions.length > 0 && `(${selectedSubscriptions.length})`}
                </span>
              </button>
              {openTab === "subscription" && (
                <div className="ml-4 mt-2 space-y-1">
                  {[ "Free", "Freemium"].map((subscription) => (
                    <label
                      key={subscription}
                      className="flex items-center text-sm text-[#7A7491] py-1 px-3 rounded-md hover:bg-[#F2F9FE] transition"
                    >
                      <input
                        type="checkbox"
                        value={subscription}
                        checked={selectedSubscriptions.includes(subscription)}
                        onChange={(e) => handleCheckboxChange("subscriptions", e)}
                        className="mr-2 h-4 w-4 text-[#075CD6] border-[#F0EEF4] rounded"
                      />
                      {subscription}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;