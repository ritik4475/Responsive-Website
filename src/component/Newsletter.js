import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full sm:flex p-2'>
      <div className='mt-14 ml-5'>
        <h1 className='text-2xl text-white font-bold sm:text-3xl'>Want tips & tricks to optimize your flow?</h1>
        <p className='text-white mt-2 text-sm sm:text-lg'>Sign up to our newsletter and stay up to date.</p>
      </div>
      <div className='grid mt-12 ml-4 p-2'>
        <input className='flex w- full p-2 rounded-md md:w-[40rem] h-12' placeholder='Enter E-mail'/>
        <button className='text-black bg-[#00d59a] w-[170px] h-12 rounded-md mx-auto mt-3 p-2 md:p-1 md:w-[200px]'>Notify me</button>
      </div>
    </div>
  )
}

export default Newsletter