import ContactSection from '@/components/ContactSection/ContactSection'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'

const page = () => {
  return (
    <>
   <div className="bg-[#1565D8]">
        <Header className={'text-white'} />
      </div>
        <ContactSection/>
      <Footer />
</>
)
}

export default page