'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LogoMarquee = () => {
  const marqueeRef = useRef(null);

  const logodata = [
    { src: 'https://img.icons8.com/m_rounded/512/FFFFFF/google-logo.png', alt: 'Logo 1' },
    { src: 'https://img.icons8.com/m_rounded/512/FFFFFF/chatgpt.png', alt: 'Logo 2' },
    { src: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/grok.png', alt: 'Logo 3' },
    { src: 'https://img.icons8.com/Dusk_Wired/512/FFFFFF/notion.png', alt: 'Logo 4' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png', alt: 'Logo 5' },
    { src: 'https://img.icons8.com/m_rounded/512/FFFFFF/linkedin--v2.png', alt: 'Logo 6' },
    { src: 'https://img.icons8.com/m_rounded/512/FFFFFF/google-logo.png', alt: 'Logo 1' },
    { src: 'https://img.icons8.com/m_rounded/512/FFFFFF/chatgpt.png', alt: 'Logo 2' },
    { src: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/grok.png', alt: 'Logo 3' },
    { src: 'https://img.icons8.com/Dusk_Wired/512/FFFFFF/notion.png', alt: 'Logo 4' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png', alt: 'Logo 5' },
    { src: 'https://img.icons8.com/m_rounded/512/FFFFFF/linkedin--v2.png', alt: 'Logo 6' },
  ];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Duplicate the content to create infinite scrolling
    marquee.innerHTML += marquee.innerHTML;

    const totalWidth = marquee.scrollWidth / 3;

    gsap.to(marquee, {
      x: `-=${totalWidth}`,
      duration: 20,
      ease: 'linear',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });
  }, []);

  return (
    <div className="w-full flex overflow-hidden relative">
      {/* Left gradient fade */}
      {/* <div className="absolute left-0 w-1/10 h-full z-[1] bg-gradient-to-r from-[#fffffffd] to-transparent"></div> */}
      {/* Right gradient fade */}
      {/* <div className="absolute right-0 w-1/10 h-full z-[1] bg-gradient-to-l from-[#ffffff] to-transparent"></div> */}
      <div
        className="flex whitespace-nowrap gap-x-8"
        ref={marqueeRef}
        style={{ willChange: 'transform', cursor: 'pointer' }}
      >
        {logodata.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className="size-24 invert px-4 sm:px-2 md:px-4 lg:px-6 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;