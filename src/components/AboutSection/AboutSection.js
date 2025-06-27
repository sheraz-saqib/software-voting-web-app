"use client";
import React, { useEffect, useRef } from "react";
import Heading from "../Common/Heading";
import PeraContent from "../Common/PeraContent";
import LogoMarqee from "../Common/LogoMarqee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  const headingRef = useRef(null);
  const peraContentRef = useRef(null);
  const imageGridRef = useRef(null);
  const logoMarqeeRef = useRef(null);

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

    // Animate Paragraph
    gsap.fromTo(
      peraContentRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: peraContentRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate Image Grid
    const images = imageGridRef.current?.querySelectorAll("img");
    if (images) {
      gsap.fromTo(
        images,
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
            trigger: imageGridRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate LogoMarqee
    gsap.fromTo(
      logoMarqeeRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
        scrollTrigger: {
          trigger: logoMarqeeRef.current,
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
    <div className="flex flex-col min-h-screen bg-[#F2F9FE]">
      <div className="mt-0 md:mt-24 flex flex-col justify-center items-center flex-1 w-full">
        <div ref={headingRef}>
          <Heading fontSize="font-semibold" className="" text={"About Us"} />
        </div>
        <div ref={peraContentRef}>
         <PeraContent
  className="flex justify-center items-center text-black"
  text={
    "For our freemium website where users can visit and participate in voting. We aim to provide a simple, engaging, and user-friendly platform for community-driven decision-making."
}
/>

        </div>
      </div>

      {/* ABOUT IMAGES */}
      <div ref={imageGridRef} className="px-3 flex justify-center items-center w-full my-10">
        <div className="grid grid-cols-3 md:grid-cols-5 md:gap-4 gap-2 justify-items-center w-fit">
          <div className="hidden md:block col-span-1 mt-24">
            <img
              src="/assets/images/aboutImg1.png"
              className="rounded-lg w-56 h-32 object-cover transition-transform duration-500 hover:scale-105"
              alt="About Image 1"
            />
          </div>
          <div className="col-span-1 mt-6 md:mt-12 md:space-y-4 space-y-2">
            <img
              src="/assets/images/aboutImg6.png"
              className="rounded-lg w-56 h-24 md:h-32 object-cover transition-transform duration-500 hover:scale-105"
              alt="About Image 6"
            />
            <img
              src="/assets/images/aboutImg5.png"
              className="rounded-lg w-56 h-24 md:h-32 object-cover transition-transform duration-500 hover:scale-105"
              alt="About Image 5"
            />
          </div>
          <div className="col-span-1 md:mt-0 mt-6">
            <img
              src="/assets/images/aboutImg4.png"
              className="rounded-lg w-52 h-50 md:h-96 object-cover transition-transform duration-500 hover:scale-105"
              alt="About Image 4"
            />
          </div>
          <div className="col-span-1 mt-6 space-y-2 md:space-y-4">
            <img
              src="/assets/images/aboutImg3.png"
              className="rounded-lg w-56 h-24 md:h-32 object-cover transition-transform duration-500 hover:scale-105"
              alt="About Image 3"
            />
            <img
              src="/assets/images/aboutImg2.png"
              className="rounded-lg w-56 h-24 md:h-32 object-cover transition-transform duration-500 hover:scale-105"
              alt="About Image 2"
            />
          </div>
          <div className="hidden md:block col-span-1 mt-24">
            <img
              src="/assets/images/aboutImg1.png"
              className="rounded-lg w-56 h-32 object-cover transition-transform duration-500 hover:scale-105"
              alt="About Image 1"
            />
          </div>
        </div>
      </div>
      <div ref={logoMarqeeRef} className="my-12">
        <LogoMarqee />
      </div>
    </div>
  );
};

export default AboutSection;