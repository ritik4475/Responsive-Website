import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {

  const [nav, setnav] = useState(true)

  const handlenav = () => {
    setnav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 text-white w-full max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#00d59a] '>ReactJS.in</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 cursor-pointer'>Home</li>
        <li className='p-4 cursor-pointer'>Company</li>
        <li className='p-4 cursor-pointer'>Resources</li>
        <li className='p-4 cursor-pointer'>About</li>
        <li className='p-4 cursor-pointer'>Contacts</li>
      </ul>
      <div onClick={handlenav} className='block md:hidden'>
      {
        !nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />
      }
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold text-[#00d59a] '>ReactJS.in</h1>
        <ul className='p-2 uppercase'>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4 border-b border-gray-600'>Contacts</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar