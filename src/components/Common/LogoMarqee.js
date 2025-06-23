'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LogoMarqee = () => {
  const marqueeRef = useRef(null);

  const logodata = [
    { src: '/assets/images/sliderlogo1.png', alt: 'Logo 1' },
    { src: '/assets/images/sliderlogo2.png', alt: 'Logo 2' },
    { src: '/assets/images/sliderlogo3.png', alt: 'Logo 3' },
    { src: '/assets/images/sliderlogo4.png', alt: 'Logo 4' },
    { src: '/assets/images/sliderlogo5.png', alt: 'Logo 5' },
    { src: '/assets/images/sliderlogo6.png', alt: 'Logo 6' },
    { src: '/assets/images/sliderlogo7.png', alt: 'Logo 7' },
  ];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Duplicate the content to create infinite scrolling
    marquee.innerHTML += marquee.innerHTML;

    const totalWidth = marquee.scrollWidth / 2;

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
    <div className="w-full py-5 flex overflow-hidden bg-black relative">
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
            className="w-28 sm:w-40 md:w-40 lg:w-48 px-4 sm:px-2 md:px-4 lg:px-6 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoMarqee;
