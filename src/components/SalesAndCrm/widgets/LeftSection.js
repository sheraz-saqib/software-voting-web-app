import React from 'react'
import NewBanner from './NewBanner'
import LeftContentSection from './LeftContentSection'
import Link from 'next/link'

const LeftSection = () => {
  return (
   <div className=" w-full h-full flex justify-center items-start flex-col space-y-5">
 <NewBanner/>
 <LeftContentSection/>
 {/* buttons  */}
    <div className="mt-8 space-x-4 max-md:mt-0">
      <Link style={{
        background: 'linear-gradient(180deg, #78AEFF 0%, #388EFF 100%)'
      }} href={'#'} className='text-white capitalize px-4 py-3 rounded-full text-sm max-md:px-3 max-md:py-2 max-md:text-xs'>
      See in Action
      </Link>
      {/* second button */}
      <Link  href={'#'} className='capitalize px-4 py-3 rounded-full text-sm border border-gray-700 text-black max-md:px-3 max-md:text-xs max-md:py-2 '>
      View demo
      </Link>
    </div>
   </div>
  )
}

export default LeftSection