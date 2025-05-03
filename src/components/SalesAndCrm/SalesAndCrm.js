import React from 'react'
import Heading from '../Common/Heading'
import RightSection from './widgets/RightSection'
import LeftSection from './widgets/LeftSection'

const SalesAndCrm = () => {
  return (
    <div className='mt-10 w-full'>
         <div className="flex justify-center items-center flex-col">
        <Heading text={'Sales and crm'} className={'mt-5'}/>
        <div className=" flex justify-center items-center mt-3">
          <p className='text-gray-700 text-sm w-[75%] text-center max-md:text-xs max-md:w-[90%]'>These tools help individuals and teams stay organized and improve their efficiency.Freemium productivity tools often include features like task management, calendars, and project collaboration.</p>
        </div>
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-x-40 max-md:gap-x-0 max-md:gap-y-20 max-md:p-0 max-sm:gap-y-10 w-full min-h-[40rem] max-w-[70%] max-[1830px]:max-w-[80%] max-[1600px]:max-w-[90%] p-4  mt-10">
          {/* left */}
         <LeftSection/>
          {/* right */}
          <RightSection/>
        </div>
      </div>
    </div>
  )
}

export default SalesAndCrm