import ContactSection from '@/components/ContactSection/ContactSection'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'

const page = () => {
  return (
    <>
   <div className="bg-[#1565D8] relative">
     <img
          src="/assets/images/oval.png"
          alt="oval"
          className="absolute z-20 -top-48 -left-48 size-[30rem] object-contain"
        />
        <Header className={'text-white'} />
      </div>
      
        <ContactSection/>
      <Footer />
</>
)
}

export default page