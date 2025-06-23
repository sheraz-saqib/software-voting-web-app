import React from 'react'
import Heading from '../Common/Heading'

const AnalyticsSection = () => {
  return (
    <div className="bg-[#F5F9FF] px-4 sm:px-8 md:px-10 py-10 sm:py-14 md:py-16 flex flex-col items-center justify-center">
      <div className="mb-5 w-full text-center  md:text-left">
        <Heading fontSize="font-semibold" className='text-left' textSize='text-2xl md:text-4xl' text="Analytics" />
      </div>
      <div className="w-full max-w-7xl">
        <img
          src="/assets/images/analytics.png"
          className="w-full h-auto object-contain"
          alt="analytics"
        />
      </div>
    </div>
  )
}

export default AnalyticsSection
