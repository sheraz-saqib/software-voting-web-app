"use client";
import React from "react";
import ProductCard from "../Common/ProductCard";
import Heading from "../Common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const productivityToolsData = [
  {
    imageSrc: "/assets/images/brands/trello.webp",
    productName: "Trello",
    category: "Project management",
    badgeType: "free",
  },
   {
    imageSrc: "/assets/images/brands/trello.webp",
    productName: "Trello",
    category: "Project management",
    badgeType: "free",
  }, {
    imageSrc: "/assets/images/brands/trello.webp",
    productName: "Trello",
    category: "Project management",
    badgeType: "free",
  },
  {
    imageSrc: "/assets/images/brands/notion.jpg",
    productName: "Notion",
    category: "Note taking",
    badgeType: "freemium",
  },
  {
    imageSrc: "/assets/images/brands/slack.png",
    productName: "Slack",
    category: "Team communication",
    badgeType: "paid",
  },
  {
    imageSrc: "/assets/images/brands/asana.webp",
    productName: "Asana",
    category: "Task management",
    badgeType: "free_trial",
  },
];
const AdvanceCrms = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center mt-10">
      <Heading
        text={"Empowering startups "}
        className={"text-center max-md:text-[1.5rem]!"}
      />
      <Heading
        text={"with smart CRM solutions"}
        className={
          "text-black text-center leading-20 max-md:leading-10 max-md:text-[1.5rem]!"
        }
      />

      {/* products */}
      <div className="w-full  rounded-lg p-4">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={4}
          navigation
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="custom-swiper pb-12"
        >
          {productivityToolsData.map((tool, index) => (
            <SwiperSlide key={index}>
              <ProductCard
                imageSrc={tool.imageSrc}
                productName={tool.productName}
                category={tool.category}
                badgeType={tool.badgeType}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AdvanceCrms;
