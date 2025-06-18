import React from 'react';

const Heading = ({ text, className = "text-center", textSize = "text-[4vw] max-md:text-[2rem]", fontSize="font-medium" }) => {
  return (
    <div
      className={`capitalize   text-black text-nowrap max-md:max-w-full md:max-w-[70%] ${textSize} ${fontSize} ${className}`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default Heading;
