'use client';
import React from 'react';
import Heading from '../Common/Heading';
import ProductCard from '../Common/ProductCard';
import SalesAndCrm from '../SalesAndCrm/SalesAndCrm';
import AdvanceCrms from '../AdvanceCrms/AdvanceCrms';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const productivityToolsData = [
  {
    imageSrc: "/assets/images/brands/trello.webp",
    productName: "Trello",
    category: "Project management",
    badgeType: "free"
  },
    {
    imageSrc: "/assets/images/brands/trello.webp",
    productName: "Trello",
    category: "Project management",
    badgeType: "free"
  },  {
    imageSrc: "/assets/images/brands/trello.webp",
    productName: "Trello",
    category: "Project management",
    badgeType: "free"
  },
  {
    imageSrc: "/assets/images/brands/notion.jpg",
    productName: "Notion",
    category: "Note taking",
    badgeType: "freemium"
  },
  {
    imageSrc: "/assets/images/brands/slack.png",
    productName: "Slack",
    category: "Team communication",
    badgeType: "paid"
  },
  {
    imageSrc: "/assets/images/brands/asana.webp",
    productName: "Asana",
    category: "Task management",
    badgeType: "free_trial"
  }
];

const Featured = () => {
  return (
    <div style={{
      background: 'linear-gradient(180deg, #F2F9FE 0%, #D1DAE8 100%)'
    }}>
      <div className="w-full h-full max-w-7xl mx-auto py-10 max-md:py-5 flex flex-col items-center justify-between">
        <div className="flex justify-center items-center flex-col">
          <Heading text={'Featured'} className={'mt-5'} />
        </div>
        {/* products */}
        <div className="w-full  rounded-lg p-4">
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
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="custom-swiper pb-12"
          >
            {productivityToolsData.map((tool, index) => (
              <SwiperSlide key={index} >
                <ProductCard
                  imageSrc={tool.imageSrc}
                  productName={tool.productName}
                  category={tool.category}
                  badgeType={tool.badgeType}
                />
              </SwiperSlide>
            ))}
         
          </Swiper>
        </div>
        {/* sales and crm */}
        <SalesAndCrm />
        <AdvanceCrms />
      </div>
    </div>
  );
};

export default Featured;