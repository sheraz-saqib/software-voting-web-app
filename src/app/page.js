import React from 'react'
import ProductivityTools from '@/components/ProductivityTools/ProductivityTools'
import TopSection from '@/components/TopSection/TopSection'
import Featured from '@/components/Featured/Featured'
import CloudStorage from '@/components/CloudStorage/CloudStorage'
import TimeManagement from '@/components/TimeManagement/TimeManagement'
import Footer from '@/components/Footer/Footer'
import FinanaceAndAccounting from '@/components/FinanceAndAccounting/FinanaceAndAccounting'

const Page = () => {
  return (
    <>

<TopSection/>
<ProductivityTools/>
<FinanaceAndAccounting/>
<Featured/>
<CloudStorage/>
<TimeManagement/>
<Footer/>
</>
  )
}

export default Page