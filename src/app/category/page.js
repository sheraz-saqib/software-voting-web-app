import CategoriesSection from '@/components/CategoriesSection/CategoriesSection'
import CategoryBrand from '@/components/CategorySection/CategorySection'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'

const Category = () => {
  return (
    <>
    <div className='bg-[#F2F9FE]'>
      <Header />
   <CategoryBrand/>
    </div>
    <CategoriesSection/>

      <Footer />
    
    </>
  )
}

export default Category