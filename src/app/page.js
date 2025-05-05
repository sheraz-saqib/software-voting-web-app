import React from 'react'
import ProductivityTools from '@/components/ProductivityTools/ProductivityTools'
import TopSection from '@/components/TopSection/TopSection'
import Featured from '@/components/Featured/Featured'
import CloudStorage from '@/components/CloudStorage/CloudStorage'
import TimeManagement from '@/components/TimeManagement/TimeManagement'
import Random from '@/components/Random/Random'
import Footer from '@/components/Footer/Footer'

const page = () => {
  return (
    <>
<TopSection/>
<ProductivityTools/>
<Featured/>
<CloudStorage/>
<TimeManagement/>
<Footer/>
</>
  )
}

export default page