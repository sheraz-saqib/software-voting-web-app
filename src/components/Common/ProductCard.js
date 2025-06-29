import React from 'react';
import Badge from './Badge';
import { SlLike, SlDislike } from "react-icons/sl";

// Badge configuration object with categories and colors


const ProductCard = ({ imageSrc, productName, category, badgeType,className, href }) => {
  return (
    <div className={`bg-white rounded-3xl p-4 min-h-64 cursor-pointer ${className}`}>
      {/* top */}
      <div className="flex justify-between items-center">
        {/* like or dislike buttons */}
        <div className="w-20 flex space-x-3 text-yellow-400 font-bold ">
          <SlLike />
          <SlDislike />
        </div>
        {/* badge */}
        <Badge 
        type={badgeType}
          text={badgeType} 
          className={`text-white`}
        />
      </div>
      {/* content */}
      <div className="flex justify-between items-center w-full h-full flex-col">
      
        <div className="flex flex-col items-center ">
          {/* product image */}   
          <div className="max-w-15 max-h-15 center bg-white w-full h-full p-4 rounded-full" style={{boxShadow: '0px 7.2px 45px 0px #1065E340'}}>
            <img src={imageSrc} className='object-contain w-full h-full' alt={productName} />
          </div>
          {/* product name */}
          <div className="text-black font-medium mt-2"><h3>{productName}</h3></div>
        </div>
        {/* product category */}
        <div className="mb-12">
          <h3 className='capitalize'>{category}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;