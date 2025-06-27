"use client";
import React, { useEffect, useRef } from "react";
import ProductCard from "../Common/ProductCard";
import Heading from "../Common/Heading";
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
    imageSrc: "/assets/images/brands/slack.png",
    productName: "Slack",
    category: "Team communication",
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

const AdvanceCrms = () => {
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const swiperRef = useRef(null);

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
          delay: 0.4,
          scrollTrigger: {
            trigger: swiperRef.current,
            start: "top 80%",
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
    <div className="w-full flex justify-center flex-col items-center mt-10">
      <div ref={heading1Ref}>
        <Heading
          text={"Empowering startups"}
          className={"text-center max-md:text-[1.5rem]!"}
        />
      </div>
      <div ref={heading2Ref}>
        <Heading
          text={"with smart CRM solutions"}
          className={
            "text-black text-center leading-20 max-md:leading-10 max-md:text-[1.5rem]!"
          }
        />
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
    </div>
  );
};

export default AdvanceCrms;