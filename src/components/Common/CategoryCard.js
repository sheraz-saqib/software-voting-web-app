import React from 'react';
import Badge from './Badge';



const CategoryCard = ({ imageSrc, productName, category, count,className }) => {
  return (
    <div className={`bg-white rounded-3xl p-4 min-h-52 cursor-pointer ${className}`}>
      {/* top */}
      <div className="flex justify-end items-center">
       
        {/* badge */}
        <Badge 
        type={count}
          text={count} 
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

export default CategoryCard;