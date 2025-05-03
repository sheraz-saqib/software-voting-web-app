import React from 'react'
import ProductCard from '../Common/ProductCard'
import Heading from '../Common/Heading';

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
const AdvanceCrms = () => {
  return (
    <div className='w-full flex justify-center flex-col items-center'>

<div className="flex justify-center items-center flex-col">
        <Heading text={'Empowering startups with smart CRM solutions'} className={'mt-5'}/>
      </div>
       {/* products */}
       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  mt-10 min-h-36  w-full max-w-[90%] ">
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
  )
}

export default AdvanceCrms