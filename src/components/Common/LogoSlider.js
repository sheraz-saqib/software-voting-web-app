'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LogoSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const logos = slider.querySelectorAll("img");
    const clone = slider.cloneNode(true);
    slider.parentNode.appendChild(clone);

    gsap.to([slider, clone], {
      x: "-100%",
      ease: "none",
      
      duration: 10,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 100),
      },
    });
  }, []);

  return (
    <div className="py-20">
    <div className="w-full flex items-center overflow-hidden bg-black">
      <div ref={sliderRef} className="flex items-center  w-max gap-8 animate-infinite-scroll">
        <img src="/assets/images/sliderlogo1.png" alt="Logo 1" className="w-28 h-28 object-contain" />
        <img src="/assets/images/sliderlogo2.png" alt="Logo 2" className="w-28 h-28 object-contain" />
        <img src="/assets/images/sliderlogo3.png" alt="Logo 3" className="w-28 h-28 object-contain" />
        <img src="/assets/images/sliderlogo4.png" alt="Logo 4" className="w-28 h-28 object-contain" />
        <img src="/assets/images/sliderlogo5.png" alt="Logo 5" className="w-28 h-28 object-contain" />
        <img src="/assets/images/sliderlogo6.png" alt="Logo 6" className="w-28 h-28 object-contain" />
        <img src="/assets/images/sliderlogo7.png" alt="Logo 7" className="w-28 h-28 object-contain" />
      </div>
    </div>
    </div>
  );
};

export default LogoSlider;