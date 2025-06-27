"use client";
import React, { useEffect, useRef } from "react";
import Heading from "../Common/Heading";
import PeraContent from "../Common/PeraContent";
import ProductCard from "../Common/ProductCard";
import Random from "../Random/Random";
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
  }, {
    imageSrc: "/assets/images/brands/asana.webp",
    productName: "Asana",
    category: "Task management",
    badgeType: "free_trial",
  },
];

const TimeManagement = () => {
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const peraContentRef = useRef(null);
  const dashboardImgRef = useRef(null);
  const swiperRef = useRef(null);
  const randomRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animate First Heading
    gsap.fromTo(
      heading1Ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading1Ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate Second Heading
    gsap.fromTo(
      heading2Ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: heading2Ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate Paragraph
    gsap.fromTo(
      peraContentRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: peraContentRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate Dashboard Image
    gsap.fromTo(
      dashboardImgRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
        scrollTrigger: {
          trigger: dashboardImgRef.current,
          start: "top 80%",
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
          delay: 0.8,
          scrollTrigger: {
            trigger: swiperRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate Random Component
    gsap.fromTo(
      randomRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1,
        scrollTrigger: {
          trigger: randomRef.current,
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
    <div>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(116, 73, 175, 0) 3.07%, #899CD7 45.1%, rgba(108, 127, 196, 0) 100%)",
        }}
        className="w-full min-h-screen mt-10"
      >
        <div className="flex justify-center items-center flex-col max-width h-full w-full">
          <div ref={heading1Ref}>
            <Heading text={"Time Management"} />
          </div>
          <div ref={heading2Ref}>
            <Heading
              text={"And Scheduling"}
              className={"text-black leading-15 max-md:leading-10"}
            />
          </div>
          <div ref={peraContentRef}>
            <PeraContent
              className={"text-[#485E79]! mt-7 max-md:mt-0"}
              text={
                "These tools help individuals and teams stay organized and improve their efficiency. Freemium productivity tools often include features like task management, calendars, and project collaboration."
              }
            />
          </div>
          <div
            ref={dashboardImgRef}
            className="flex justify-center items-center max-w-[70%] my-20 max-md:my-10 max-md:max-w-[90%]"
          >
            <img src="/assets/images/dashboard2.webp" alt="Dashboard" />
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
          {/* random */}
          <div ref={randomRef}>
            <Random />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeManagement;