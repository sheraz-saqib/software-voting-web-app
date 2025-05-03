import React from 'react'

const Heading = ({text,className}) => {
  return (
    <div  className={`capitalize text-[4vw] max-md:text-[2rem] font-medium text-black max-md:max-w-full md:max-w-[70%] text-center ${className}`}>{text}</div>
  )
}

export default Heading