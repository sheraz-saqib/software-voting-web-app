import React from 'react'
import Badge from '../Common/Badge'
import Heading from '../Common/Heading'
import ProductCard from '../Common/ProductCard'

const ProductivityTools = () => {
  return (
    <div style={{
      background: 'linear-gradient(180deg, #F2F9FE 0%, #D1DAE8 100%)'
    }} >
     <div className="w-full h-full max-width  py-10 max-md:py-5 flex flex-col  items-center justify-between">
  <div className="flex justify-center items-center flex-col">
  <Badge text={'extra tools'}/>
      <Heading text={'productivity tools'} className={'mt-5'}/>
      <div className=" flex justify-center items-center mt-3">
      <p className='text-gray-700 text-sm w-[75%] text-center max-md:text-xs max-md:w-[90%]'>These tools help individuals and teams stay organized and improve their efficiency.Freemium productivity tools often include features like task management, calendars, and project collaboration.</p>
      </div>
  </div>
      {/* products */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-md:mt-10 md:mt-44 min-h-36  w-full max-w-[90%] ">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
     </div>
    </div>
  )
}

export default ProductivityTools
