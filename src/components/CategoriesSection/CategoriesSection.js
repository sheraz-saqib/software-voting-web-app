"use client";
import React from "react";
import Heading from "../Common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CategoryCard from "../Common/CategoryCard";

const textWriting = [
  { name: "Blog Writer", count: 567, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Handwriting", count: 60, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Essay Writer", count: 326, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Report Writing", count: 334, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Story Writing", count: 580, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Paraphraser", count: 607, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Translate", count: 618, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Copywriting", count: 976, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Letter Writer", count: 927, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Rewriter", count: 876, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Bio Generator", count: 191, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Porn & Poetry Generator", count: 706, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Paper", count: 284, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Caption or Subtitle", count: 522, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Lyrics Generator", count: 111, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Script Writing", count: 278, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Book Writing", count: 254, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Summarizer", count: 1252, imageSrc: "/assets/images/brands/trello.webp" },
];

const imageItems = [
  { name: "Image Enhancer", count: 435, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Cartoon Generator", count: 234, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Profile Picture Maker", count: 541, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Remove Background", count: 652, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Image Captioning", count: 313, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "AI Photo Generator", count: 720, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Colorize Black & White", count: 162, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Image to Sketch", count: 423, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Anime Avatar", count: 389, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Face Swap", count: 264, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Meme Generator", count: 899, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Image Blur", count: 500, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Enhance Resolution", count: 684, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Old Photo Restore", count: 341, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Image Style Transfer", count: 470, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Photo Collage", count: 211, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Image Filter", count: 799, imageSrc: "/assets/images/brands/trello.webp" },
  { name: "Pixel Art Converter", count: 389, imageSrc: "/assets/images/brands/trello.webp" },
];

const CategoriesSection = () => {
  return (
    <div
      className="bg-gradient-to-br from-blue-50 to-gray-200"
      style={{
        background: "linear-gradient(180deg, #F2F9FE 0%, #D1DAE8 100%)",
      }}
    >
      <div className="w-full h-full max-w-7xl mx-auto py-10 max-md:py-5 flex flex-col items-center justify-between">
        {/* Text & Writing Section */}
        <div className="flex justify-center items-center flex-col w-full mb-12">
          <Heading
            textSize="text-xl md:text-4xl"
            fontSize="font-medium"
            text={"Text & Writing"}
            className="mt-5"
          />
          <div className="w-full rounded-lg p-4">
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
              {textWriting.map((tool, index) => (
                <SwiperSlide key={index}>
                  <CategoryCard
                    imageSrc={tool.imageSrc}
                    productName={tool.name}
                    count={tool.count}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center flex-col w-full">
          <Heading
            textSize="text-xl md:text-4xl"
            fontSize="font-medium"
            text={"Image"}
            className="mt-5"
          />
          <div className="w-full rounded-lg p-4">
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
              {imageItems.map((tool, index) => (
                <SwiperSlide key={index}>
                  <CategoryCard
                    imageSrc={tool.imageSrc}
                    productName={tool.name}
                    count={tool.count}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;