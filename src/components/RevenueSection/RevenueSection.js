import React from 'react';
import Heading from '../Common/Heading';

const RevenueSection = () => {
  return (
    <div className='flex flex-col md:flex-row py-10 bg-[#F2F9FE] w-full'>
      <div className='w-full md:w-1/2 flex justify-center items-center p-10'>
        <div>
          <Heading
            textSize='text-2xl md:text-4xl'
            text={"It’s your business.<br/>We’re here to help it grow."}
          />
          <div className='flex flex-col md:flex-row md:justify-start justify-center items-center gap-5 my-6'>
            <input
              type='email'
              placeholder='Enter your email'
              className='text-sm p-3 border rounded bg-white w-full md:max-w-1/3'
            />
            <button className='bg-[#075CD6] cursor-pointer flex justify-center text-white p-3 rounded w-full md:max-w-1/3'>
              Start 14 day trial
            </button>
          </div>
          <a href='#' className='text-[#075CD6] mt-2 block'>
            See Our Pricing →
          </a>
        </div>
      </div>
      <div className='flex-1 bg-[#D1DAE8] flex items-center justify-center p-5 md:p-10 relative'>
        <div className='bg-white z-20 rounded-lg w-full max-w-xl shadow-md relative'>
          <div className='p-3'>
            <p className='text-black text-lg font-semibold'>Outstanding Revenue</p>
          </div>
          <div className='bg-[#F8F8F8] p-5 flex flex-col md:flex-row justify-between gap-5'>
            <div className='bg-white border border-gray-200 p-4 rounded-md shadow-sm w-full md:w-1/2'>
              <p className='text-2xl font-medium'>$8,230</p>
              <p className='text-sm text-gray-500'>Invoice: 102</p>
              <div className='h-16 mt-3'>
                <img src='/assets/images/revenue1.png' alt='Revenue Graph' />
              </div>
            </div>
            <div className='bg-white border border-gray-200 p-4 rounded-md shadow-sm w-full md:w-1/2'>
              <p className='text-2xl font-medium'>$2,397</p>
              <p className='text-sm text-gray-500'>Invoice: 102</p>
              <div className='h-16'>
                <img src='/assets/images/revenue2.png' alt='Expense Graph' />
              </div>
            </div>
          </div>
        </div>
        <div className='absolute z-30 bottom-0 right-2 md:right-12 bg-white rounded-lg w-16 md:w-20 text-center shadow-md'>
          <div className='mb-2'>
            <img src='/assets/images/expanses.png' alt='Expense Pie Chart' className='mx-auto w-10 md:w-full' />
          </div>
        </div>
        <div>
          <img src='/assets/images/revenuebg.jpg' alt='Expense Pie Chart' className='absolute top-0 right-2 md:right-10 w-24 md:w-36 h-24 md:h-36' />
        </div>
      </div>
    </div>
  );
};

export default RevenueSection;