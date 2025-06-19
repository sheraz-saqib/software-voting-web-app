import React from 'react'
import Heading from '../Common/Heading'
import PeraContent from '../Common/PeraContent'

const AuthLeftSection = () => {
  return (
    <div className='bg-gradient-to-b from-[#056EDE] to-[#022585] h-screen w-full md:w-1/2 relative'>
      {/* Background Images */}
      <img
        src='/assets/images/eclipse.png'
        alt=''
        className='absolute left-0 bottom-0 w-32 h-32 md:w-48 md:h-48'
      />
      <img
        src='/assets/images/eclipse3.png'
        alt=''
        className='absolute left-2 bottom-2 w-32 h-32 md:w-48 md:h-48'
      />

      {/* Content */}
      <div className='flex flex-col justify-center items-center h-full px-6 sm:px-10 md:px-12'>
        <div className="">
<Heading className='text-white font-bold text-2xl sm:text-3xl md:text-4xl' text={"Freemium"} />

        <PeraContent
          className="text-base sm:text-lg w-full text-white text-left mt-2"
          text={"The most popular peer to peer lending at SEA"}
        />

        <div className='mt-4'>
          <button className='text-white p-2 px-5 sm:px-6 bg-[#0575E6] rounded-full text-sm sm:text-base'>
            Read More
          </button>
        </div>
        </div>

        
      </div>
    </div>
  )
}

export default AuthLeftSection
