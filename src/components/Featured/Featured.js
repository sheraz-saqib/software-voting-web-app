import React from 'react'
import Heading from '../Common/Heading'
import ProductCard from '../Common/ProductCard';
import SalesAndCrm from '../SalesAndCrm/SalesAndCrm';
import AdvanceCrms from '../AdvanceCrms/AdvanceCrms';

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
const Featured = () => {
  return (
    <div style={{
      background: 'linear-gradient(180deg, #F2F9FE 0%, #D1DAE8 100%)'
    }} >
     <div className="w-full h-full max-width  py-10 max-md:py-5 flex flex-col  items-center justify-between">
      <div className="flex justify-center items-center flex-col">
        <Heading text={'Featured'} className={'mt-5'}/>
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
      {/* sales and crm */}
     <SalesAndCrm/>
     <AdvanceCrms/>
     </div>
    </div>
  );
}

export default Featured
