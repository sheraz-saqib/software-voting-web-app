import React from 'react'
import Heading from '../Common/Heading'
import ProductCard from '../Common/ProductCard'
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
const Random = () => {
  return (
    <div  className='w-full mt-10 max-md:mt-0'>
         <div className="flex justify-center items-center flex-col max-width h-full w-full ">
         <Heading
          text={"Random"}
        />
        {/* products */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  mt-10 max-md:mt-10 mb-20 min-h-36  w-full max-w-[90%] ">
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
         </div>
    </div>
  )
}

export default Random