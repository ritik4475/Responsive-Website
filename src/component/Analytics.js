import React from 'react'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img src='images/coding-jobs-1.jpg' className=' h-60 w-[400px] mx-auto' alt='img'/>
    <div className=' my-8 flex flex-col md:mx-5'>
        <p className='text-[#00d59a] font-bold text-md md:text-xl'>DATA ANALYTICS DASHBOARD</p>
        <p className='text-black font-bold text-2xl md:text-4xl'>Manage Data Analytics Centrally</p>
        <p className='text-black text-sm py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button className='bg-black text-[#00d59a] w-[100px] mx-auto rounded-md font-medium p-2 my-4 sm:my-2 md:w-[200px]'>Get Started</button>
    </div>
    </div>
    </div>
  )
}

export default Analytics