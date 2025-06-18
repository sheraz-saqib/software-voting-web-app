import React from "react";
import Heading from "../Common/Heading";

const CategoriesSection = () => {
  const textWriting = [
    { name: "Blog Writer", count: 567 },
    { name: "Handwriting", count: 60 },
    { name: "Essay Writer", count: 326 },
    { name: "Report Writing", count: 334 },
    { name: "Story Writing", count: 580 },
    { name: "Paraphraser", count: 607 },
    { name: "Translate", count: 618 },
    { name: "Copywriting", count: 976 },
    { name: "Letter Writer", count: 927 },
    { name: "Rewriter", count: 876 },
    { name: "Bio Generator", count: 191 },
    { name: "Porn & Poetry Generator", count: 706 },
    { name: "Paper", count: 284 },
    { name: "Caption or Subtitle", count: 522 },
    { name: "Lyrics Generator", count: 111 },
    { name: "Script Writing", count: 278 },
    { name: "Book Writing", count: 254 },
    { name: "Summarizer", count: 1252 },
  ];

  const imageItems = [
    { name: "Image Enhancer", count: 435 },
    { name: "Cartoon Generator", count: 234 },
    { name: "Profile Picture Maker", count: 541 },
    { name: "Remove Background", count: 652 },
    { name: "Image Captioning", count: 313 },
    { name: "AI Photo Generator", count: 720 },
    { name: "Colorize Black & White", count: 162 },
    { name: "Image to Sketch", count: 423 },
    { name: "Anime Avatar", count: 389 },
    { name: "Face Swap", count: 264 },
    { name: "Meme Generator", count: 899 },
    { name: "Image Blur", count: 500 },
    { name: "Enhance Resolution", count: 684 },
    { name: "Old Photo Restore", count: 341 },
    { name: "Image Style Transfer", count: 470 },
    { name: "Photo Collage", count: 211 },
    { name: "Image Filter", count: 799 },
    { name: "Pixel Art Converter", count: 389 },
  ];

  const splitIntoColumns = (array) => {
    const col1 = [];
    const col2 = [];
    const col3 = [];
    array.forEach((item, index) => {
      if (index % 3 === 0) col1.push(item);
      else if (index % 3 === 1) col2.push(item);
      else col3.push(item);
    });
    return [col1, col2, col3];
  };

  const renderItems = (items) =>
    items.map((item, index) => (
      <div
        key={index}
        className="flex justify-between border-b-4 border-r-4 border-t-4 border-[#0575E6] py-2"
      >
        <span className="ml-5">{item.name}</span>
        <span className="mr-3">{item.count}</span>
      </div>
    ));

  const [textCol1, textCol2, textCol3] = splitIntoColumns(textWriting);
  const [imageCol1, imageCol2, imageCol3] = splitIntoColumns(imageItems);

  return (
    <div className="px-5 md:px-10 w-full mx-auto mt-8 space-y-12">
      {/* TEXT & WRITING Section */}
      <div>
        <Heading
          textSize="text-2xl"
          fontSize="font-bold"
          text={"TEXT & WRITING"}
          className="text-blue-700"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="space-y-5">{renderItems(textCol1)}</div>
          <div className="space-y-5">{renderItems(textCol2)}</div>
          <div className="space-y-5">{renderItems(textCol3)}</div>
        </div>
      </div>

      {/* IMAGE Section */}
      <div>
        <Heading
          textSize="text-2xl"
          fontSize="font-bold"
          text={"IMAGE"}
          className="text-blue-700"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
          <div className="space-y-5">{renderItems(imageCol1)}</div>
          <div className="space-y-5">{renderItems(imageCol2)}</div>
          <div className="space-y-5">{renderItems(imageCol3)}</div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
