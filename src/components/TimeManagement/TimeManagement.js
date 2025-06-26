'use client'
import Heading from '../Common/Heading'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ProductCard from '../Common/ProductCard'
import PeraContent from '../Common/PeraContent';
import Random from '../Random/Random';
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
    imageSrc: "/assets/images/brands/notion.jpg",
    productName: "Notion",
    category: "Note taking",
    badgeType: "freemium"
  },
   {
    imageSrc: "/assets/images/brands/notion.jpg",
    productName: "Notion",
    category: "Note taking",
    badgeType: "freemium"
  }, {
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
const TimeManagement = () => {
  return (
    <div>
       <div style={{
        background: 'linear-gradient(180deg, rgba(116, 73, 175, 0) 3.07%, #899CD7 45.1%, rgba(108, 127, 196, 0) 100%)'

       }} className="w-full min-h-screen  mt-10">
      <div className="flex justify-center items-center flex-col max-width h-full w-full ">
        <Heading
          text={"Time Management"}
        />
        <Heading
          text={"And Scheduling"}
          className={"text-black leading-15 max-md:leading-10"}
        />
         <PeraContent className={'text-[#485E79]! mt-7 max-md:mt-0'} text={'These tools help individuals and teams stay organized and improve their efficiency.Freemium productivity tools often include features like task management, calendars, and project collaboration.'}/>
        <div className="flex justify-center items-center max-w-[70%] my-20 max-md:my-10 max-md:max-w-[90%]">
          <img src="/assets/images/dashboard2.webp" alt="" />
        </div>
        {/* products */}
   
   <div className="w-full max-w-[90%] mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="custom-swiper max-md:mt-10 md:mt-20"
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
          </Swiper>
        </div>

      {/* random */}
      <Random/>
      </div>
    </div>
    </div>
  )
}

export default TimeManagement