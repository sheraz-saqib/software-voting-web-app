import React from 'react'

const PeraContent = ({text,className}) => {
  return (
    <div className=" flex justify-center items-center mt-3">
          <p className={`text-white text-sm w-[75%] text-center max-md:text-xs max-md:w-[90%] ${className }`}>
           {text}
          </p>
        </div>
  )
}

export default PeraContent