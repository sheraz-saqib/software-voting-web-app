import React from 'react'
import Badge from '../Common/Badge'
import Heading from '../Common/Heading'

const ProductivityTools = () => {
  return (
    <div style={{
      background: 'linear-gradient(180deg, #F2F9FE 0%, #D1DAE8 100%)'
    }} className='h-screen py-10 flex flex-col  items-center'>
      <Badge/>
      <Heading text={'productivity tools'} className={'mt-5'}/>
      <div className=" flex justify-center items-center mt-3">
      <p className='text-gray-700 text-sm w-[75%] text-center'>These tools help individuals and teams stay organized and improve their efficiency.Freemium productivity tools often include features like task management, calendars, and project collaboration.</p>
      </div>
    </div>
  )
}

export default ProductivityTools
