import React from 'react'

import FooterTopSection from './TopSection/FooterTopSection'

const Footer = () => {
  return (
    <div className="w-full min-h-screen bg-[url('/assets/images/bubble.webp')] bg-top bg-no-repeat bg-[#05071A]">
         <div className="flex justify-center items-center flex-col max-width h-full w-full  max-sm:p-5">
          {/* top section */}
         <FooterTopSection/>
         </div>
      </div>
  )
}

export default Footer