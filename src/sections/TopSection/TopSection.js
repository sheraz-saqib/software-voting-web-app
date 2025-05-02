import Header from '@/components/Navbar/Navbar';
import React from 'react';
import SectionHero from '../SectionHero/SectionHero';

const TopSection = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/images/banner-image.webp')" }}
    >
<div className="absolute inset-0 bg-gradient-to-t from-black via-black to-gray-900 opacity-80 z-0"></div>
<Header />
      <SectionHero />
    </div>
  );
};

export default TopSection;