'use client';
import Heading from '../Common/Heading';
import FeedbackCard from '../Common/FeedbackCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FreelanceCard = () => {
  const FeedbackCardData = [
    {
      text: "The digital innovation in this app has truly transformed my financial experience. It’s a must-have!",
      authorName: "Jessica Pandaan",
      authorDesc: "Product Manager at FinovateX",
    },
    {
      text: "The digital innovation in this app has truly transformed my financial experience. It’s a must-have!",
      authorName: "Jessica Pandaan",
      authorDesc: "Product Manager at FinovateX",
    },
    {
      text: "The digital innovation in this app has truly transformed my financial experience. It’s a must-have!",
      authorName: "Jessica Pandaan",
      authorDesc: "Product Manager at FinovateX",
    },
    {
      text: "The user-friendly interface makes managing finances a breeze. Best financial app out there!",
      authorName: "Mark Holloway",
      authorDesc: "Freelance Web Developer",
    },
    {
      text: "The debt management system is excellent. It’s helped me pay off my debts faster and regain control of my finances",
      authorName: "Leila Thompson",
      authorDesc: "Content Creator",
    },
    {
      text: "The investment tracker keeps me updated on my portfolio performance. It’s like having a personal financial advisor!",
      authorName: "Asana Malik",
      authorDesc: "Equity Analyst at InvestIQ",
    },
  ];

  return (
    <div className="bg-[#F2F9FE] flex flex-col justify-center items-center min-h-screen py-10">
      <div className="mt-10">
        <Heading
          textSize="text-2xl md:text-5xl"
          text="What our freelancers are saying"
        />
      </div>

      <div className="w-full max-w-[90%] mx-auto relative mt-10">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={4}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {FeedbackCardData.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              <FeedbackCard
                text={item.text}
                authorName={item.authorName}
                authorDesc={item.authorDesc}
              />
            </SwiperSlide>
          ))}
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev absolute top-1/2 -left-12 transform -translate-y-1/2 z-10 cursor-pointer text-gray-600 hover:text-gray-800">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </div>
          <div className="swiper-button-next absolute top-1/2 -right-12 transform -translate-y-1/2 z-10 cursor-pointer text-gray-600 hover:text-gray-800">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
          {/* Custom Pagination */}
          <div className="swiper-pagination absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default FreelanceCard;