import React from 'react'
import Badge from './Badge'

const ProductCard = () => {
  return (
    <div className='bg-white rounded-3xl'>
      {/* top */}
    <div className="flex justify-between items-center">
      {/* like or dislike buttons */}
      <div className="w-10 bg-red-300">

      </div>
      {/* badge */}
      <Badge text={'free'} className={'bg-[#0095FF]'}/>
    </div>
    </div>
  )
}

export default ProductCard