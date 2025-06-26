import React from 'react'
import InnerProductCard from '../Common/InnerProductCard';
import Heading from '../Common/Heading';

const ProductAndFeatureCard = () => {

  const productivityToolsData = [
    {
      imageSrc: "/assets/images/evernote.png",
      productName: "Evernote",
      category: "Note-taking",
      badgeType: "freemium"
    },
    {
      imageSrc: "/assets/images/asana.png",
      productName: "Asana",
      category: "Task management",
      badgeType: "freemium"
    },
    {
      imageSrc: "/assets/images/notion.png",
      productName: "Notion",
      category: "Workspace and note-taking",
      badgeType: "freemium"
    }
  ];

  return (
    <div>

  <div className="bg-[#F3F8FE]  px-5 py-5 items-start justify-between max-md:flex-col max-md:items-center">
          {/* Cards Section */}
        <div className=''>
              <Heading
        fontSize="font-semibold"
        textSize="text-2xl md:text-4xl"
        className="mb-8"
        text="relevent tools"
      />
        </div>
<div className='flex gap-5 px-7 '>
          <div className="flex  space-x-4 w-[50%] max-md:w-full max-md:flex-col max-md:space-x-0 max-md:space-y-4">
            {productivityToolsData.map((tool, index) => (
              <InnerProductCard
                key={index}
                imageSrc={tool.imageSrc}
                productName={tool.productName}
                category={tool.category}
                badgeType={tool.badgeType}
                className="max-md:w-full"
              />
            ))}
          </div>

          {/* Image */}
          <img
            src="/assets/images/template.png"
            className="w-56 h-52  mx-4 mt-1.5 rounded-xl max-lg:hidden"
            alt=""
          />

          {/* Features */}
          <div className="flex flex-col items-start w-[25%] h-52 justify-center max-md:w-full max-md:h-auto max-md:text-center max-md:mb-4">
            <h2 className="text-xl font-bold">FEATURES</h2>
            <p className="text-sm mt-2">
              Introducing the work collection, a line of minimalistic bags designed
              for new generation specifically for the modern professionals.
            </p>
            <a href="#" className="text-sm mt-2 text-yellow-700 hover:underline">
              Read More...
            </a>
          </div>
        </div>
</div>
    </div>
  )
}

export default ProductAndFeatureCard