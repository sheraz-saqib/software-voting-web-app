"use client";
import React, { useEffect, useRef } from "react";
import LogoMarqee from "../Common/LogoMarqee";
import GetStartedButton from "../CloudStorage/widgets/GetStartedButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Brand = () => {
  const headingLine1Ref = useRef(null);
  const headingLine2Part1Ref = useRef(null);
  const headingLine2Part2Ref = useRef(null);
  const subheadingRef = useRef(null);
  const buttonRef = useRef(null);
  const trustedRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animate first line of heading
    gsap.fromTo(
      headingLine1Ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingLine1Ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate second line, part 1 (Subscription Design)
    gsap.fromTo(
      headingLine2Part1Ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: headingLine2Part1Ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate second line, part 2 (Services)
    gsap.fromTo(
      headingLine2Part2Ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: headingLine2Part2Ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate subheading
    gsap.fromTo(
      subheadingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.6,
        scrollTrigger: {
          trigger: subheadingRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate GetStartedButton
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.8,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate trusted brands text
    gsap.fromTo(
      trustedRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.0,
        scrollTrigger: {
          trigger: trustedRef.current,
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
    <div className="flex justify-center items-center min-h-[calc(100vh-4.5rem)] text-black text-center relative overflow-hidden">
      <div className="z-10 flex justify-center items-center flex-col">
        <h1 className="text-3xl lg:text-7xl font-bold leading-tight">
          <span ref={headingLine1Ref} className="block">
            Elevate Your Brand With
          </span>
          <span className="block">
            <span
              ref={headingLine2Part1Ref}
              className="font-light Galada-Regular"
            >
              Subscription Design{" "}
            </span>
            <span ref={headingLine2Part2Ref} className="font-bold text-black">
              Services
            </span>
          </span>
        </h1>

        <p
          ref={subheadingRef}
          className="mt-4 text-sm lg:text-base max-w-xl mx-auto text-black"
        >
          Our team of creative experts delivers stunning, high-quality designs
          tailored to your needs, ensuring your brand stands out in a crowded
          market.
        </p>
        <div ref={buttonRef}>
          <GetStartedButton />
        </div>

        <p ref={trustedRef} className="mt-30 mb-10 text-sm text-black">
          Trusted by leading brands:
        </p>
      </div>
      <div className="absolute bottom-0 w-full left-0">
        <LogoMarqee />
      </div>
    </div>
  );
};

export default Brand;