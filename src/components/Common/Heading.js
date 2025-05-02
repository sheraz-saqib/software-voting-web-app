import React from 'react'

const Heading = ({text,className}) => {
  return (
    <div  className={`capitalize text-[4vw] max-md:text-[2rem] font-medium text-black ${className}`}>{text}</div>
  )
}

export default Heading