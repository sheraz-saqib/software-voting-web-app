import React from "react";
import Badge from "./Badge";
import { SlLike, SlDislike } from "react-icons/sl";

const InnerProductCard = ({ imageSrc, productName, category, badgeType }) => {
  return (
    <div className="bg-white w-full rounded-3xl p-4 min-h-36 cursor-pointer">
      {/* Top */}
      <div className="flex justify-between items-center">
        {/* Like or Dislike buttons */}
        <div className="w-20 flex space-x-3 text-yellow-400 font-bold">
          <SlLike />
          <SlDislike />
        </div>
        {/* Badge */}
        <Badge type={badgeType} text={badgeType} className="text-white" />
      </div>
      {/* Content */}
      <div className="flex justify-between items-center w-full h-full flex-col">
        <div className="flex flex-col items-center">
          {/* Product image */}
          <div
            className="max-w-15 max-h-15 center bg-white w-full h-full p-4 rounded-full"
            style={{ boxShadow: "0px 7.2px 45px 0px #1065E340" }}
          >
            <img
              src={imageSrc}
              className="object-contain w-full h-full"
              alt={productName}
            />
          </div>
          {/* Product name */}
          <div className="text-black font-medium mt-2">
            <h3>{productName}</h3>
          </div>
        </div>
        {/* Product category */}
        <div className="mb-12">
          <h3 className="text-[#485E79] capitalize">{category}</h3>
        </div>
      </div>
    </div>
  );
};

export default InnerProductCard;