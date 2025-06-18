"use client";
import React, { useState } from "react";
import Heading from "../Common/Heading";
import PeraContent from "../Common/PeraContent";

const RankingSection = () => {
  const [activeTab, setActiveTab] = useState("Top Tools");
  const [activeMonth, setActiveMonth] = useState("April 2025");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  const months = [
    "April 2025",
    "March 2025",
    "February 2025",
    "January 2025",
    "December 2025",
    "November 2025",
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleMonthChange = (direction) => {
    const currentIndex = months.indexOf(activeMonth);
    if (direction === "next" && currentIndex < months.length - 1) {
      setActiveMonth(months[currentIndex + 1]);
    } else if (direction === "prev" && currentIndex > 0) {
      setActiveMonth(months[currentIndex - 1]);
    }
  };

  const parseValue = (value) => {
    if (typeof value !== "string") return value;
    const suffixes = { B: 1_000_000_000, M: 1_000_000, K: 1_000 };
    const match = value.match(/^(\d*\.?\d+)([BMK])?$/);
    if (!match) return parseFloat(value) || 0;
    const num = parseFloat(match[1]);
    const suffix = match[2];
    return suffix ? num * suffixes[suffix] : num;
  };

  const sortRankings = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    rankings.sort((a, b) => {
      let valueA = key === "growthRate" ? parseFloat(a[key].replace("%", "")) : parseValue(a[key]);
      let valueB = key === "growthRate" ? parseFloat(b[key].replace("%", "")) : parseValue(b[key]);

      if (valueA < valueB) return direction === "asc" ? -1 : 1;
      if (valueA > valueB) return direction === "asc" ? 1 : -1;
      return 0;
    });
  };

  const rankings = [
    {
      rank: 1,
      tool: "Trello",
      monthlyVisit: "5.1B",
      growth: "593.2M",
      growthRate: "13.04%",
      introduction:
        "Lorem ipsum dolor sit amet consectetur. Vitae amet auctor eget scelerisque quisque sit venenatis netus elementum.",
      tags: "Lorem ipsum, Lorem ipsum, Lorem ipsum",
    },
    {
      rank: 2,
      tool: "Zoho CRM",
      monthlyVisit: "701.3M",
      growth: "142.0M",
      growthRate: "25.40%",
      introduction:
        "Lorem ipsum dolor sit amet consectetur. Vitae amet auctor eget scelerisque quisque sit venenatis netus elementum.",
      tags: "Lorem ipsum, Lorem ipsum, Lorem ipsum",
    },
    {
      rank: 3,
      tool: "OneDrive",
      monthlyVisit: "701.3M",
      growth: "142.0M",
      growthRate: "19.36%",
      introduction:
        "Lorem ipsum dolor sit amet consectetur. Vitae amet auctor eget scelerisque quisque sit venenatis netus elementum.",
      tags: "Lorem ipsum, Lorem ipsum, Lorem ipsum",
    },
    {
      rank: 4,
      tool: "Clockify",
      monthlyVisit: "409.4M",
      growth: "66.4M",
      growthRate: "19.36%",
      introduction:
        "Lorem ipsum dolor sit amet consectetur. Vitae amet auctor eget scelerisque quisque sit venenatis netus elementum.",
      tags: "Lorem ipsum, Lorem ipsum, Lorem ipsum",
    },
    {
      rank: 5,
      tool: "Clockify",
      monthlyVisit: "409.4M",
      growth: "66.4M",
      growthRate: "19.36%",
      introduction:
        "Lorem ipsum dolor sit amet consectetur. Vitae amet auctor eget scelerisque quisque sit venenatis netus elementum.",
      tags: "Lorem ipsum, Lorem ipsum, Lorem ipsum",
    },
    {
      rank: 6,
      tool: "Clockify",
      monthlyVisit: "409.4M",
      growth: "66.4M",
      growthRate: "19.36%",
      introduction:
        "Lorem ipsum dolor sit amet consectetur. Vitae amet auctor eget scelerisque quisque sit venenatis netus elementum.",
      tags: "Lorem ipsum, Lorem ipsum, Lorem ipsum",
    },
    {
      rank: 7,
      tool: "Clockify",
      monthlyVisit: "409.4M",
      growth: "66.4M",
      growthRate: "19.36%",
      introduction:
        "Lorem ipsum dolor sit amet consectetur. Vitae amet auctor eget scelerisque quisque sit venenatis netus elementum.",
      tags: "Lorem ipsum, Lorem ipsum, Lorem ipsum",
    },
  ];

  return (
    <div className="bg-[#F2F9FE] py-10 px-4 sm:px-6 md:px-10">
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl md:text-5xl font-bold">
          <span className="text-[#5C70A9]">Welcome</span>{" "}
          <span className="text-black">to</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-black mt-2">
          Freemium Ranking Products
        </h2>
      </div>

      <div className="w-full sm:w-3/4 md:w-3/4 mx-auto mt-4 text-center">
        <PeraContent
          className="text-sm sm:text-base md:text-lg text-[#7A7491]"
          text={
            "Lorem ipsum dolor sit amet consectetur. Vel tristique sapien dignissim sit platea urna vel aliquet. Ridiculus vitae eu lectus quam mus non sit morbi."
          }
        />
      </div>

      <div className="flex justify-center mt-8">
     <nav className="bg-white w-full max-w-7xl p-2 rounded-lg shadow-md overflow-x-auto sm:overflow-visible">
  <div className="flex flex-nowrap justify-start sm:justify-between items-center gap-2 min-w-max">
    <button
      className={`cursor-pointer px-2 sm:px-4 py-2 rounded-md ${
        activeTab === "Top Tools"
          ? "bg-[#0575E6] text-white"
          : "text-gray-700"
      }`}
      onClick={() => handleTabClick("Top Tools")}
    >
      Top Tools
    </button>
    <button
      className={`cursor-pointer px-2 sm:px-4 py-2 rounded-md ${
        activeTab === "Top Tools by Categories"
          ? "bg-[#0575E6] text-white"
          : "text-gray-700"
      }`}
      onClick={() => handleTabClick("Top Tools by Categories")}
    >
      Top Tools by Categories
    </button>
    <button
      className={`cursor-pointer px-2 sm:px-4 py-2 rounded-md ${
        activeTab === "Top Tools by Regions"
          ? "bg-[#0575E6] text-white"
          : "text-gray-700"
      }`}
      onClick={() => handleTabClick("Top Tools by Regions")}
    >
      Top Tools by Regions
    </button>
    <button
      className={`cursor-pointer px-2 sm:px-4 py-2 rounded-md ${
        activeTab === "Top Tools by Source"
          ? "bg-[#0575E6] text-white"
          : "text-gray-700"
      }`}
      onClick={() => handleTabClick("Top Tools by Source")}
    >
      Top Tools by Source
    </button>
    <button
      className={`cursor-pointer px-2 sm:px-4 py-2 rounded-md ${
        activeTab === "Top Tools by Reviews"
          ? "bg-[#0575E6] text-white"
          : "text-gray-700"
      }`}
      onClick={() => handleTabClick("Top Tools by Reviews")}
    >
      Top Tools by Reviews
    </button>
  </div>
</nav>

      </div>

   <div className="flex justify-center mt-8">
  <nav className="w-full max-w-7xl p-2 rounded-lg shadow-md flex items-center justify-between overflow-x-auto sm:overflow-visible">
    <div className="w-8 h-8 border border-blue-500 rounded-full flex justify-center items-center mr-2 flex-shrink-0">
      <button
        className="text-blue-500 text-lg"
        onClick={() => handleMonthChange("prev")}
      >
        &lt;
      </button>
    </div>

    <div className="flex flex-nowrap gap-2 overflow-x-auto sm:overflow-visible px-2">
      {months.map((month) => (
        <button
          key={month}
          className={`px-2 sm:px-4 py-2 rounded-md border border-blue-300 whitespace-nowrap ${
            activeMonth === month
              ? "bg-blue-200 text-blue-800"
              : "text-gray-700"
          }`}
          onClick={() => setActiveMonth(month)}
        >
          {month}
        </button>
      ))}
    </div>

    <div className="w-8 h-8 border border-blue-500 rounded-full flex justify-center items-center ml-2 flex-shrink-0">
      <button
        className="text-blue-500 text-lg"
        onClick={() => handleMonthChange("next")}
      >
        &gt;
      </button>
    </div>
  </nav>
</div>


      <div className="flex justify-center items-center text-center">
        <div className="border-b border-blue-500 w-full max-w-7xl mt-10"></div>
      </div>

      <div className="mt-10 w-full max-w-7xl mx-auto bg-white p-6 rounded-md overflow-x-auto">
        <table className="w-full min-w-[800px] border border-[#CCCCCC] bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-white h-16 text-gray-900 border-b border-[#CCCCCC] text-sm">
              <th className="py-2 px-4 font-thin">Ranking</th>
              <th className="py-2 px-4 font-thin">Tools</th>
              <th className="py-2 px-4 font-thin">
                Monthly Visit
                <button onClick={() => sortRankings("monthlyVisit")} className="ml-2">
                  {sortConfig.key === "monthlyVisit" && sortConfig.direction === "asc" ? (
                    <span>↑↓</span>
                  ) : (
                    <span>↓↑</span>
                  )}
                </button>
              </th>
              <th className="py-2 px-4 font-thin">
                Growth
                <button onClick={() => sortRankings("growth")} className="ml-2">
                  {sortConfig.key === "growth" && sortConfig.direction === "asc" ? (
                    <span>↑↓</span>
                  ) : (
                    <span>↓↑</span>
                  )}
                </button>
              </th>
              <th className="py-2 px-4 font-thin">
                Growth Rate
                <button onClick={() => sortRankings("growthRate")} className="ml-2">
                  {sortConfig.key === "growthRate" && sortConfig.direction === "asc" ? (
                    <span>↑↓</span>
                  ) : (
                    <span>↓↑</span>
                  )}
                </button>
              </th>
              <th className="py-2 px-4 font-thin">Introduction</th>
              <th className="py-2 px-4 font-thin">Tags</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((item, index) => (
              <tr
                key={index}
                className={`border-b border-[#CCCCCC] ${index === 0 ? "bg-blue-50" : ""}`}
              >
                <td className="py-5 px-4 flex items-center justify-center">
                  {index === 0 ? (
                    <span>
                      <img
                        src="/assets/images/upyellowarrow.png"
                        className="w-10 h-10"
                        alt="Yellow arrow"
                      />
                    </span>
                  ) : index === 1 ? (
                    <span>
                      <img
                        src="/assets/images/uporangearrow.png"
                        className="w-10 h-10"
                        alt="Orange arrow"
                      />
                    </span>
                  ) : index === 2 ? (
                    <span>
                      <img
                        src="/assets/images/upbluearrow.png"
                        className="w-10 h-10"
                        alt="Blue arrow"
                      />
                    </span>
                  ) : (
                    item.rank
                  )}
                </td>
                <td className="py-2 px-4 font-medium">{item.tool}</td>
                <td className="py-2 px-4">{item.monthlyVisit}</td>
                <td className="py-2 px-4 text-green-600">
                  <img
                    src="/assets/images/uparrow.png"
                    alt="uparrow"
                    className="w-5 h-5 inline-block mr-1"
                  />
                  {item.growth}
                </td>
                <td className="py-2 px-4 text-green-600">
                  <img
                    src="/assets/images/uparrow.png"
                    alt="uparrow"
                    className="w-5 h-5 inline-block mr-1"
                  />
                  {item.growthRate}
                </td>
                <td className="py-2 px-4 text-xs w-64">{item.introduction}</td>
                <td className="py-2 px-4 text-xs w-64">{item.tags}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RankingSection;