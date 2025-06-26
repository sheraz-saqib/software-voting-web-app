'use client'
import Heading from "../Common/Heading";
import { MdOutlineArrowOutward } from "react-icons/md";
import GetStartedButton from "./widgets/GetStartedButton";
import PeraContent from "../Common/PeraContent";
import ProductCard from "../Common/ProductCard";
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
  },{
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
const CloudStorage = () => {
  return (
    <div className="w-full min-h-screen bg-[url('/assets/images/bubble.webp')] bg-center bg-no-repeat bg-[#E4ECFE]">
      <div className="flex justify-center items-center flex-col max-width h-full w-full ">
        <Heading
          text={"Cloud Stronge & File Sharing"}
          className={"pt-10 max-[500px]:text-[1.5rem]!"}
        />
        <PeraContent className="text-black" text={'These tools help individuals and teams stay organized and improve their efficiency.Freemium productivity tools often include features like task management, calendars, and project collaboration.'}/>
        {/* button */}
        <GetStartedButton/>
        {/* dashboard image */}
        <div className="flex justify-center items-center max-w-[70%] my-20 max-md:my-10 max-md:max-w-[90%]">
          <img src="/assets/images/dashboard.webp" alt="" />
        </div>
        {/* products */}

    <div className="w-full max-w-[90%] rounded-lg p-4">
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
      </div>
    </div>
  );
};

export default CloudStorage;
