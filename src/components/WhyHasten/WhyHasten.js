"use client";
import React, { useEffect, useRef } from "react";
import Heading from "../Common/Heading";
import PeraContent from "../Common/PeraContent";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhyHasten = () => {
  const heading1Ref = useRef(null);
  const peraContent1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const peraContent2Ref = useRef(null);

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

    // Animate First Paragraph
    gsap.fromTo(
      peraContent1Ref.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: peraContent1Ref.current,
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
        scrollTrigger: {
          trigger: heading2Ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate Second Paragraph
    gsap.fromTo(
      peraContent2Ref.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: peraContent2Ref.current,
          start: "top 85%",
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
    <div className="px-5 md:px-16 flex flex-col bg-[#F2F9FE]">
      <div ref={heading1Ref}>
        <Heading
          textSize="text-2xl md:text-5xl"
          className="text-left"
          text={"Why Hasten"}
        />
      </div>
      <div ref={peraContent1Ref}>
        <PeraContent
          align="left"
          className="text-black"
          text={`
            Lorem ipsum dolor sit amet consectetur. Eget ullamcorper ultricies dictum nulla volutpat mi cras libero nunc. Ut consectetur etiam pellentesque id nunc. Nunc quisque at eu urna tempus nam porttitor tellus. Sem pretium quis urna tincidunt.
            <br /><br />
            Lorem ipsum dolor sit amet consectetur. Mauris porta vel tortor netus nisl ultrices consequat hac. Risus dictumst aliquet sit diam leo et sit. Amet aenean ac vulputate amet dictum sit. Elementum purus ornare et est lacinia. Felis commodo leo nunc odio senectus euismod lobortis. Imperdiet adipiscing sed aenean facilisis dis neque quis elit. Tristique morbi eu suscipit turpis magnis.
          `}
        />
      </div>

      <div ref={heading2Ref}>
        <Heading
          textSize="text-2xl md:text-5xl"
          className="mt-6 text-left"
          text={"Privacy-focused"}
        />
      </div>
      <div ref={peraContent2Ref}>
        <PeraContent
          align="left"
          className="text-black"
          text={`
            Lorem ipsum dolor sit amet consectetur. Mauris porta vel tortor netus nisl ultrices consequat hac. Risus dictumst aliquet sit diam leo et sit. Amet aenean ac vulputate amet dictum sit. Elementum purus ornare et est lacinia. Felis commodo leo nunc odio senectus euismod lobortis. Imperdiet adipiscing sed aenean facilisis dis neque quis elit. Tristique morbi eu suscipit turpis magnis.
          `}
        />
      </div>
    </div>
  );
};

export default WhyHasten;