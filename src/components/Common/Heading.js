import React from 'react'

const Heading = ({text,className="text-center"}) => {
  return (
    <div  className={`capitalize text-[4vw] text-nowrap max-md:text-[2rem] font-medium text-black max-md:max-w-full md:max-w-[70%]  ${className}`}>{text}</div>
  )
}

export default Heading