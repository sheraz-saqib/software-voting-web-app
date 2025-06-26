'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InnerProductCard from '../Common/InnerProductCard';
import Heading from '../Common/Heading';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ProductAndFeatureCard = () => {
  // Refs for animation targets
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef(null);

  const productivityToolsData = [
    {
      imageSrc: "/assets/images/evernote.png",
      productName: "Evernote",
      category: "Note-taking",
      badgeType: "freemium"
    },
    {
      imageSrc: "/assets/images/asana.png",
      productName: "Asana",
      category: "Task management",
      badgeType: "freemium"
    },
    {
      imageSrc: "/assets/images/notion.png",
      productName: "Notion",
      category: "Workspace and note-taking",
      badgeType: "freemium"
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const heading = headingRef.current;
    const cards = cardsRef.current;
    const image = imageRef.current;
    const features = featuresRef.current;

    // Set initial states
    gsap.set([heading, cards, image, features], {
      opacity: 0,
      y: 30
    });

    // Create timeline for coordinated animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse',
        // markers: true, // Remove in production
      }
    });

    // Animate elements in sequence
    tl.to(heading, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    })
    .to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3")
    .to(image, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
      scale: 1
    }, "-=0.4")
    .to(features, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3");

    // Individual card animations
    const cardElements = cards?.querySelectorAll('.product-card');
    if (cardElements) {
      gsap.set(cardElements, { opacity: 0, y: 20, scale: 0.95 });
      
      gsap.to(cardElements, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: cards,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    }

    // Hover animations for cards
    if (cardElements) {
      cardElements.forEach(card => {
        const handleMouseEnter = () => {
          gsap.to(card, {
            y: -8,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
          });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup event listeners
        return () => {
          card.removeEventListener('mouseenter', handleMouseEnter);
          card.removeEventListener('mouseleave', handleMouseLeave);
        };
      });
    }

    // Image hover effect
    if (image) {
      const handleImageHover = () => {
        gsap.to(image, {
          scale: 1.05,
          rotation: 2,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleImageLeave = () => {
        gsap.to(image, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      image.addEventListener('mouseenter', handleImageHover);
      image.addEventListener('mouseleave', handleImageLeave);

      // Cleanup
      return () => {
        image.removeEventListener('mouseenter', handleImageHover);
        image.removeEventListener('mouseleave', handleImageLeave);
      };
    }

    // Features text animation
    if (features) {
      const featuresElements = features.querySelectorAll('h2, p, a');
      gsap.set(featuresElements, { opacity: 0, x: 20 });
      
      gsap.to(featuresElements, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.8,
        scrollTrigger: {
          trigger: features,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    }

    // Cleanup ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div className="bg-gradient-to-br from-[#F3F8FE] to-[#E8F4FD] px-5 py-8 items-start justify-between max-md:flex-col max-md:items-center overflow-hidden">
        {/* Heading Section */}
        <div className="mb-8" ref={headingRef}>
          <Heading
            fontSize="font-semibold"
            textSize="text-2xl md:text-4xl"
            className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            text="Relevant Tools"
          />
        </div>

        <div className="flex gap-8 px-7 max-lg:flex-col max-lg:gap-6">
          {/* Cards Section */}
          <div 
            ref={cardsRef}
            className="flex space-x-6 w-[50%] max-md:w-full max-md:flex-col max-md:space-x-0 max-md:space-y-6"
          >
            {productivityToolsData.map((tool, index) => (
              <div key={index} className="product-card">
                <InnerProductCard
                  imageSrc={tool.imageSrc}
                  productName={tool.productName}
                  category={tool.category}
                  badgeType={tool.badgeType}
                  className="max-md:w-full transform transition-all duration-300 hover:shadow-lg rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              ref={imageRef}
              src="/assets/images/template.png"
              className="w-56 h-52 mx-4 mt-1.5 rounded-xl shadow-lg max-lg:hidden cursor-pointer transition-transform duration-300"
              alt="Template showcase"
              style={{ 
                filter: 'drop-shadow(0 8px 25px rgba(0,0,0,0.1))',
                transform: 'scale(0.95)'
              }}
            />
          </div>

          {/* Features */}
          <div 
            ref={featuresRef}
            className="flex flex-col items-start w-[25%] h-52 justify-center max-md:w-full max-md:h-auto max-md:text-center max-md:mb-4 p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-3 tracking-wide">
              FEATURES
            </h2>
            <p className="text-sm mt-2 text-gray-600 leading-relaxed">
              Introducing the work collection, a line of minimalistic bags designed
              for new generation specifically for the modern professionals.
            </p>
            <a 
              href="#" 
              className="text-sm mt-4 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 relative group"
            >
              Read More...
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAndFeatureCard;