import React from 'react'
import Heading from '../Common/Heading'
import ProductCard from '../Common/ProductCard'
import PeraContent from '../Common/PeraContent';
import Random from '../Random/Random';
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
        {/* dashboard image */}
        <div className="flex justify-center items-center max-w-[70%] my-20 max-md:my-10 max-md:max-w-[90%]">
          <img src="/assets/images/dashboard2.webp" alt="" />
        </div>
        {/* products */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  mt-10 max-md:mt-0 mb-20 min-h-36  w-full max-w-[90%] ">
        {productivityToolsData.map((tool, index) => (
          <ProductCard
            key={index}
            imageSrc={tool.imageSrc}
            productName={tool.productName}
            category={tool.category}
            badgeType={tool.badgeType}
          />
        ))}
      </div>

      {/* random */}
      <Random/>
      </div>
    </div>
    </div>
  )
}

export default TimeManagement