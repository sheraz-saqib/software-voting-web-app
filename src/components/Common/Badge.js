import React from 'react'

const Badge = ({text,className}) => {
  return (
    <div className=' flex justify-center items-center '>
      <span className={`bg-[#DEE8F6] rounded-full uppercase text-[#084DB3] font-semibold text-[.75rem] px-5 py-1 max-md:px-4 max-md:text-[.6rem] ${className}`}>{text}</span>
    </div>
  )
}

export default Badge