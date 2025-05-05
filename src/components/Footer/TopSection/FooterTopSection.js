import React from 'react'
import FooterTopLeftSection from './widgets/FooterTopLeftSection'
import FooterTopRightSection from './widgets/FooterTopRightSection'

const FooterTopSection = () => {
  return (
    <div className="grid grid-cols-5 w-full max-w-[80%] max-lg:grid-cols-4 max-md:grid-cols-1 max-xl:max-w-[95%] min-h-[30rem] justify-center max-sm:max-w-full">
      {/* left */}
   <FooterTopLeftSection/>
    {/* right */}
    <FooterTopRightSection/>
    
  </div>
  )
}

export default FooterTopSection