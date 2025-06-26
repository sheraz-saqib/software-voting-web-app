'use client'

import React from 'react';
import Heading from '../Common/Heading';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Import Swiper modules

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const FinanaceAndAccounting = () => {
  return (
    
    <div className="bg-[#F0F7FD] text-black w-full h-full max-width py-10 max-lg:py-4 flex flex-col items-center justify-between">
      <Heading text={'Finance And Accounting'} className={'mt-5'} />
      <div className="flex  justify-center items-center mt-3">
        <p className=" text-xs lg:text-sm w-[75%] text-center  max-lg:w-[95%] max-lg:leading-tight">
          These tools help individuals and business manage finances, track expenses and handle invoices. Freemium versions often limit in the number of users of features
        </p>
      </div>

      <div className="flex flex-row justify-center items-center mt-8 w-[75%] max-lg:w-[95%] gap-4 max-lg:flex-col max-lg:gap-3">
        {/* Left Side - Keeping it as is for desktop, adjust for mobile */}
        <div className="flex  flex-col w-1/2 max-lg:w-full gap-4 max-lg:gap-3">
          {/* Card 1 */}
          <div className="bg-[#E1E7F0]  py-5 text-black rounded-lg p-6 flex flex-col justify-between lg:h-[240px] max-lg:h-[140px] max-lg:p-4">
            <div className="flex justify-between max-lg:gap-2">
              <div className=" max-lg:flex max-lg:flex-col max-lg:justify-center ">
                <h3 className="text-3xl font-medium max-lg:text-lg">Accounting and invoicing</h3>
                <div className="max-w-[13rem] max-lg:max-w-[10rem]">
                  <p className="text-sm text-[#485E79] mt-8 max-lg:mt-2 max-lg:text-[10px]">
                    Automatically move money to savings based on personalized financial recommendations.
                  </p>
                </div>
              </div>

              <div className="relative flex items-center ">
                <Image
                  src="/assets/images/women-call.webp"
                  alt="Women call"
                  width={200}
                  height={200}
                  className=" bg-cover bg-center bg-no-repeat object-contain max-lg:w-[80px] max-lg:h-[80px]"
                />
                <div className="absolute left-0 lg:left-9 lg:bottom-7 bottom-0 rounded-lg bg-transparent bg-opacity-10 backdrop-blur-lg p-[5px] max-lg:left-4 max-lg:bottom-2 max-lg:p-[3px]">
                  <Image
                    src="/assets/images/brands/brand-3-lines.webp"
                    alt="Brand Logo"
                    width={80}
                    height={60}
                    className="bg-cover bg-center rounded-lg bg-no-repeat object-contain max-lg:w-[40px] max-lg:h-[30px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#E1E7F0] py-5 text-black rounded-lg p-6 flex flex-col justify-between lg:h-[240px] max-lg:h-[140px] max-lg:p-4">
            <div className="flex justify-between max-lg:gap-8">
              <div className="max-lg:flex max-lg:items-center">
                <div className="relative w-[200px] max-lg:w-[80px]">
                  <Image
                    src="/assets/images/graph/graph-1.webp"
                    alt="Graph"
                    width={200}
                    height={200}
                    className="bg-cover bg-center bg-no-repeat object-contain max-lg:w-[80px] max-lg:h-[80px]"
                  />
                  <div className="absolute -right-3 -bottom-2 rounded-lg bg-transparent bg-opacity-10 backdrop-blur-lg p-[5px] max-lg:p-[3px] max-lg:-right-1 max-lg:-bottom-1">
                    <Image
                      src="/assets/images/brands/branch-leave.jpg"
                      alt="Brand Logo"
                      width={100}
                      height={60}
                      className="bg-cover bg-center rounded-lg object-contain max-lg:w-[50px] max-lg:h-[30px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex max-lg:flex-col max-lg:justify-center">
                <div>
                  <h3 className="text-3xl w-48 font-medium max-lg:text-lg max-lg:w-full">Personal finance</h3>
                  <div className="max-w-[13rem] max-lg:max-w-[10rem]">
                    <p className="text-sm text-[#485E79] mt-4 max-lg:mt-2 max-lg:text-[10px]">
                      Explore a wide range of investment options tailored to your unique financial goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Updated Card */}
        <div className="bg-gradient-to-t from-[#E1E7F0] to-white rounded-lg p-6 w-[40%] max-lg:w-full h-[31rem] max-lg:h-[260px] flex flex-col justify-between relative text-black max-lg:p-4">
          <div className="inline-block w-fit bg-[#DEE8F6] text-[#2A66BE] text-xs font-medium uppercase px-2.5 py-1 rounded-full mb-4 max-lg:text-[8px] max-lg:px-2 max-lg:py-1">
       
            Peaceful Tomorrow
          </div>
          <div className="relative flex-1 rounded-lg overflow-hidden">
            <Image
              src="/assets/images/women-smile.webp"
              alt="Women smile"
              layout="fill"
              className=" object-cover"
            />

            <div className="absolute bottom-1 flex items-center justify-center">
              <Image
                src="/assets/images/graph/graph-3.webp"
                alt="Graph"
                width={350}
                height={100}
                className="bg-cover bg-center rounded-lg bg-no-repeat object-contain max-lg:w-[150px] max-lg:h-[50px]"
              />
            </div>

            <div className="absolute right-5 -bottom-3 rounded-lg z-10 bg-white bg-opacity-10 backdrop-blur-lg p-[5px] max-lg:p-[3px] max-lg:right-44 max-lg:-bottom-1">
              <Image
                src="/assets/images/brands/qb-brand.webp"
                alt="Brand Logo"
                width={80}
                height={60}
                className="rounded-lg object-contain lg:max-lg:w-[40px] lg:max-lg:h-[30px] max-lg:w-[36px] max-lg:h-[26px]"
              />
            </div>
          </div>

          <div className="flex justify-between items-end mt-4 max-lg:mt-2 max-lg:flex-col max-lg:gap-2 max-lg:items-start">
            <div className="text-2xl font-medium max-lg:text-base">Invoicing and accounting</div>
            <div className="text-sm text-[#485E79] w-52 max-lg:text-[10px] max-lg:w-full">
              guiding your journey comfortable retirement tools guide.
            </div>
          </div>
        </div>
      </div>

      {/* New Full-Width Section */}
      <div className="bg-white w-[69%] max-lg:w-[95%] pb-4 mt-3 lg:mt-8 relative p-1 rounded-lg flex justify-between max-lg:flex-col">
        <div className="max-lg:w-full max-lg:mb-2">
          <Image
            src="/assets/images/mobile.webp"
            alt="Phone"
            width={500}
            height={200}
            className="bg-cover bg-center object-cover max-lg:w-full max-lg:h-[100px]"
          />
        </div>

        <div className="flex flex-col items-end mt-5 mr-7 max-lg:items-start max-lg:mr-0 max-lg:mt-2">
          <h3 className="text-2xl font-medium text-black max-lg:text-base">Accounting</h3>
          <div className="w-[27rem] max-lg:w-full">
            <p className="text-[#485E79] mt-16 max-lg:text-[10px] max-lg:mt-2 max-lg:leading-tight">
              Explore a wide range of investment options tailored to your unique financial goals.
            </p>
          </div>
        </div>

        <div className="absolute left-84  lg:left-1/2 transform -translate-x-1/2 bottom-2 backdrop-blur-lg p-[4px] border border-transparent rounded-lg max-lg:p-[2px] max-lg:bottom-14">
          <Image
            src="/assets/images/brands/brand-f.webp"
            alt="Brand Logo"
            width={85}
            height={80}
            className="bg-cover bg-center rounded-lg object-contain max-lg:w-[50px] max-lg:h-[40px]"
          />
        </div>
      </div>

      <div className=" flex px-8  lg:px-0 justify-center mt-5 py-10 max-lg:pt-6 max-lg:px-4">
        <p className="text-sm md:text-xl ">
          More than <span className="text-[#FFB407]">152.78k+</span> users love their financial journey
        </p>
      </div>

      <div className="w-full px-4">
        <Swiper
          modules={[Autoplay, Pagination]} 
          slidesPerView={4} 
          loop={true} 
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false, 
            reverseDirection: false, 
          }}
          breakpoints={{
            0: {
              slidesPerView: 1, 
              spaceBetween: 2,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 2,
            },
          }}
          className="py-4"
        >
          {[
            {
              quote: "The budgeting tool has been a game-changer for me. It's helped me save more than I ever thought possible.",
              name: "David Gadang",
              title: "Specialist Doctor",
              avatar: "/assets/images/avatar.webp",
            },
            {
              quote: "Managing my finances has never been easier with these tools!",
              name: "Sarah Lee",
              title: "Financial Advisor",
              avatar: "/assets/images/avatar.webp",
            },
            {
              quote: "Invoicing is now a breeze, thanks to this amazing app.",
              name: "John Doe",
              title: "Small Business Owner",
              avatar: "/assets/images/avatar.webp",
            },
            {
              quote: "I love how it tracks my expenses so accurately.",
              name: "Emily Chen",
              title: "Freelancer",
              avatar: "/assets/images/avatar.webp",
            },
            {
              quote: "This tool transformed my financial planning.",
              name: "Michael Brown",
              title: "Accountant",
              avatar: "/assets/images/avatar.webp",
            },
            {
              quote: "Saving money has become second nature with this.",
              name: "Lisa Kim",
              title: "Marketing Manager",
              avatar: "/assets/images/avatar.webp",
            },
            {
              quote: "Highly recommend for anyone managing business finances.",
              name: "Robert Smith",
              title: "Entrepreneur",
              avatar: "/assets/images/avatar.webp",
            },
            {
              quote: "A must-have for personal finance management!",
              name: "Anna Patel",
              title: "Consultant",
              avatar: "/assets/images/avatar.webp",
            },
          ].map((card, index) => (
            <SwiperSlide key={index}>
             <div
              key={index}
              className="w-[470px] h-48 min-w-[300px] py-8 bg-[#181E26] text-white rounded-lg p-4 flex flex-col justify-between"
            >
              <p className=" mb-4">{card.quote}</p>
              <div className="flex items-center">
                <Image
                  src={card.avatar}
                  alt={`${card.name} avatar`}
                  width={40}
                  height={40}
                  className="bg-gradient-to-t from-[#6681A8] to-[#2263C4] rounded-full mr-2 object-cover"
                />
                <div>
                  <p className="font-medium">{card.name}</p>
                  <p className="text-sm text-gray-400">{card.title}</p>
                </div>
              </div>
            </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Optional Custom Swiper Styles */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background: #ffffff;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #FFB407;
        }
      `}</style>
    </div>
  );
};

export default FinanaceAndAccounting;