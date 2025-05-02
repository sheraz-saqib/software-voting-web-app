import Header from '@/components/navbar';
import React from 'react';
import SectionHero from '../sectionHero';

const TopSection = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/images/banner-image.webp')" }}
    >
      <Header />
      <SectionHero />
    </div>
  );
};

export default TopSection;