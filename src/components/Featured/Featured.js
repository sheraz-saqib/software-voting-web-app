"use client";
import React, { useEffect, useRef } from "react";
import Heading from "../Common/Heading";
import ProductCard from "../Common/ProductCard";
import SalesAndCrm from "../SalesAndCrm/SalesAndCrm";
import AdvanceCrms from "../AdvanceCrms/AdvanceCrms";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  },{
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
];

const Featured = () => {
  const headingRef = useRef(null);
  const swiperRef = useRef(null);
  const salesCrmRef = useRef(null);
  const advanceCrmsRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animate Heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
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
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: swiperRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate SalesAndCrm
    gsap.fromTo(
      salesCrmRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: salesCrmRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate AdvanceCrms
    gsap.fromTo(
      advanceCrmsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: advanceCrmsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

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
      <div className="w-full h-full max-w-7xl mx-auto py-10 max-md:py-5 flex flex-col items-center justify-between">
        <div ref={headingRef} className="flex justify-center items-center flex-col">
          <Heading text={"Featured"} className={"mt-5"} />
        </div>
        {/* products */}
        <div ref={swiperRef} className="w-full rounded-lg p-4">
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
        {/* sales and crm */}
        <div ref={salesCrmRef}>
          <SalesAndCrm />
        </div>
          <AdvanceCrms />
      </div>
    </div>
  );
};

export default Featured;