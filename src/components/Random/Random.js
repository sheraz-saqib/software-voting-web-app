'use client';
import React from 'react';
import Heading from '../Common/Heading';
import ProductCard from '../Common/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Sample data
const productivityToolsData = [
  {
    imageSrc: '/assets/images/brands/trello.webp',
    productName: 'Trello',
    category: 'Project management',
    badgeType: 'free',
  },
  {
    imageSrc: '/assets/images/brands/trello.webp',
    productName: 'Trello',
    category: 'Project management',
    badgeType: 'free',
  },
  {
    imageSrc: '/assets/images/brands/trello.webp',
    productName: 'Trello',
    category: 'Project management',
    badgeType: 'free',
  },
  {
    imageSrc: '/assets/images/brands/notion.jpg',
    productName: 'Notion',
    category: 'Note taking',
    badgeType: 'freemium',
  },
  {
    imageSrc: '/assets/images/brands/slack.png',
    productName: 'Slack',
    category: 'Team communication',
    badgeType: 'freemium',
  },
  {
    imageSrc: '/assets/images/brands/asana.webp',
    productName: 'Asana',
    category: 'Task management',
    badgeType: 'free_trial',
  },
];

const Random = () => {
  return (
    <div className="w-full mt-10 max-md:mt-0">
      <div className="flex justify-center items-center flex-col h-full w-full max-w-7xl mx-auto px-4">
        <Heading text="Other Products" />
        {/* Swiper Container */}
        <div className="w-full rounded-lg">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={4}
            navigation
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 8 },
              640: { slidesPerView: 2, spaceBetween: 12 },
              1024: { slidesPerView: 3, spaceBetween: 16 },
              1280: { slidesPerView: 4, spaceBetween: 16 },
            }}
            className="custom-swiper pb-12"
          >
            {productivityToolsData.map((tool, index) => (
              <SwiperSlide key={index}>
                <ProductCard
                  imageSrc={tool.imageSrc}
                  productName={tool.productName}
                  category={tool.category}
                  badgeType={tool.badgeType}
                />
              </SwiperSlide>
            ))}
            <div className="swiper-pagination mt-4"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Random;