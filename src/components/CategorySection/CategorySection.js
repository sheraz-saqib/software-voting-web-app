import React from "react";
import Heading from "../Common/Heading";
import PeraContent from "../Common/PeraContent";

const categories = [
  { name: "Text & Writing", image: "/assets/images/pixel_writing.png" },
  { name: "Image", image: "/assets/images/image.png" },
  { name: "Video", image: "/assets/images/youtube.png" },
  { name: "Code IT", image: "/assets/images/code.png" },
  { name: "Voice", image: "/assets/images/voice.png" },
  { name: "Business", image: "/assets/images/business.png" },
  { name: "Marketing", image: "/assets/images/markeing.png" },
  { name: "Design & Art", image: "/assets/images/pen.png" },
  { name: "Education", image: "/assets/images/education.png" },
];

const CategoryBrand = () => {
  return (
    <div className="bg-[#DCE7FA] py-20 px-4 md:px-10">
      <div className="flex gap-3 flex-col items-center text-center">
        <Heading
          textSize="text-xl md:text-5xl"
          fontSize="font-bold"
          text={"Freedom to work your way."}
        />
        <Heading
          textSize="text-xl md:text-5xl"
          className="font-normal"
          text={"With nothing in the way."}
        />
      </div>

      <div className="w-full md:w-3/4 mx-auto mt-2 md:mt-4 flex justify-center items-center text-center rounded-md">
        <PeraContent
          className="text-base md:text-lg text-black px-4"
          text={
            "Lorem ipsum dolor sit amet consectetur. Vel tristique sapien dignissim sit platea urna vel aliquet. Ridiculus vitae eu lectus quam mus non sit morbi."
          }
        />
      </div>

<div className="w-full mt-8 flex flex-wrap justify-center gap-4">
  {categories.map((category, index) => (
    <div
      key={index}
      className={`${
        category.name === "Text & Writing"
          ? "bg-[#075CD6] text-white"
          : "bg-white text-black"
      } 
        w-[45%] sm:w-[30%] md:w-[138px] 
        h-[120px] 
        p-4 sm:p-5 
        rounded 
        flex flex-col items-center justify-center gap-2`}
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-8 h-8 sm:w-10 sm:h-10"
      />
      <div className="text-sm text-center truncate w-full">
        {category.name}
      </div>
    </div>
  ))}
</div>


      <div className="flex justify-center text-center mt-8">
        <button className="bg-[#0575E6] cursor-pointer text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full flex items-center gap-2 text-sm sm:text-base">
          <div>View More</div>
          <img
            className="w-3.5 h-3.5 sm:w-4 sm:h-4"
            src="/assets/images/rightarrow.png"
            alt="right"
          />
        </button>
      </div>
    </div>
  );
};

export default CategoryBrand;
