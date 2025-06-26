"use client";
import React, { useEffect, useRef } from "react";
import Heading from "../Common/Heading";
import PeraContent from "../Common/PeraContent";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProductInfo = () => {
  const headingRef = useRef(null);
  const peraContentRef = useRef(null);
  const listRef = useRef(null);

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

    // Animate List Items
    const listItems = listRef.current?.querySelectorAll("li");
    if (listItems) {
      gsap.fromTo(
        listItems,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          delay: 0.4,
          scrollTrigger: {
            trigger: listRef.current,
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
    <div id="productInfo" className="bg-[#F3F8FE] px-3 sm:px-6 md:px-12 py-8 w-full">
      <div ref={headingRef}>
        <Heading
          fontSize="font-semibold"
          textSize="text-2xl md:text-4xl"
          className="mb-4"
          text="PRODUCT INFORMATION"
        />
      </div>

      <div ref={peraContentRef} className="mb-6 text-left max-w-5xl w-full">
        <PeraContent
          text="Trello is the flexible work management tool where teams can ideate plans, collaborate on projects, organize workflows, and track progress in a visual, productive, and rewarding way. From brainstorm to planning to execution, Trello manages the big milestones and the day-to-day tasks of working together and getting things done."
        />
      </div>

      <ul ref={listRef} className="list-disc pl-5 space-y-4 max-w-5xl text-left w-full text-sm sm:text-base">
        <li>
          Around the summer of 2010, Fog Creek Software starts doing regular
          Creek Weeks, internal explorations for potential products. In January
          2011, a prototype that hopes to solve some high-level planning issues
          is pitched. It’s called Trellis. Full time development begins soon
          after.
        </li>
        <li>
          After a closed beta, Trello launches at TechCrunch Disrupt in
          September of 2011 with apps for the web and iPhone. We narrowly avoid
          names like Cardvark and Planatee and go with the name Trello.
        </li>
        <li>
          In the summer of 2012, Fog Creek co-founder Joel Spolsky’s dog Taco
          becomes the official Trello spokes-husky. Trello reaches 500,000
          members and launches the Trello Android app.
        </li>
        <li>Bug fixes and performance improvements.</li>
        <li>
          In July 2014, Trello spins off from Fog Creek and becomes Trello, Inc.
          naming Fog Creek co-founder Michael Pryor as its CEO. The company
          raises $10.3 million in a Series A round of funding led by Spark
          Capital and Index Ventures. Trello has over 4.75 million users.
        </li>
        <li>
          In May 2015, Trello goes international, with localized experiences for
          Brazil, Germany, and Spain.
        </li>
        <li>
          In early 2017, Trello is acquired by Atlassian and begins the next
          chapter in empowering teams everywhere.
        </li>
        <li>Help us add more things to this list.</li>
      </ul>
    </div>
  );
};

export default ProductInfo;