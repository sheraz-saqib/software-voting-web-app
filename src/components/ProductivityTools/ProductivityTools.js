"use client";

import React, { useEffect, useRef } from "react";
import Badge from "../Common/Badge";
import Heading from "../Common/Heading";
import ProductCard from "../Common/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// JSON data for 4 productivity tools
const productivityToolsData = [
  {
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
    badgeType: "freemium",
  },
  {
    imageSrc: "/assets/images/brands/asana.webp",
    productName: "Asana",
    category: "Task management",
    badgeType: "free_trial",
  },
  {
    imageSrc: "/assets/images/brands/asana.webp",
    productName: "Asana",
    category: "Task management",
    badgeType: "free_trial",
  },
    {
    imageSrc: "/assets/images/brands/asana.webp",
    productName: "Asana",
    category: "Task management",
    badgeType: "free_trial",
  },
    {
    imageSrc: "/assets/images/brands/asana.webp",
    productName: "Asana",
    category: "Task management",
    badgeType: "free_trial",
  },
];

const ProductivityTools = () => {
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animate Badge
    gsap.fromTo(
      badgeRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: badgeRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate Heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate Description
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate Swiper Slides
    const slides = swiperRef.current?.querySelectorAll(".swiper-slide");
    if (slides) {
      gsap.fromTo(
        slides,
        { opacity: 0, x: (index) => (index % 2 === 0 ? 50 : -50) },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          delay: 0.6,
          scrollTrigger: {
            trigger: swiperRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #F2F9FE 0%, #D1DAE8 100%)",
      }}
    >
      <div className="w-full h-full max-width py-10 max-md:py-5 flex flex-col items-center justify-between">
        <div className="flex justify-center items-center flex-col">
          <div ref={badgeRef}>
            <Badge text={"extra tools"} />
          </div>
          <div ref={headingRef}>
            <Heading text={"productivity tools"} className={"mt-5"} />
          </div>
          <div ref={descriptionRef} className="flex justify-center items-center mt-3">
            <p className="text-gray-700 text-sm w-[75%] text-center max-md:text-xs max-md:w-[90%]">
              These tools help individuals and teams stay organized and improve
              their efficiency. Freemium productivity tools often include features
              like task management, calendars, and project collaboration.
            </p>
          </div>
        </div>
        {/* products */}
        <div ref={swiperRef} className="w-full max-w-[90%] mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="custom-swiper max-md:mt-10 md:mt-20"
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
    </div>
  );
};

export default ProductivityTools;