import React from 'react'

const Cards = () => {
    return (
        <div className='w-full bg-white py-[8rem] px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3'>
                <div className='w-full shadow-xl flex flex-col p-4 my-12 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src='images/single.png' alt='img' />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-4xl font-bold text-center'>$29.00</p>
                    <div className=' text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='text-black font-bold bg-[#00d59a] w-[120px] h-12 rounded-md mx-auto mt-3 p-2 md:p-1 md:w-[200px]'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-12 rounded-lg md:mx-4 hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src='images/patner.png' alt='img' />
                    <h2 className='text-2xl font-bold text-center py-8'>Patnership</h2>
                    <p className='text-4xl font-bold text-center'>$99.00</p>
                    <div className=' text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>2 TB Storage</p>
                        <p className='py-2 border-b mx-8'>2 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 4 GB</p>
                    </div>
                    <button className='text-[#00d59a] font-bold bg-black w-[120px] h-12 rounded-md mx-auto mt-3 p-2 md:p-1 md:w-[200px]'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-12 rounded-lg md:mx-8 hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src='images/group.png' alt='img' />
                    <h2 className='text-2xl font-bold text-center py-8'>Group Users</h2>
                    <p className='text-4xl font-bold text-center'>$199.00</p>
                    <div className=' text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>4 TB Storage</p>
                        <p className='py-2 border-b mx-8'>Multiple Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 12 GB</p>
                    </div>
                    <button className='text-black font-bold bg-[#00d59a] w-[120px] h-12 rounded-md mx-auto mt-3 p-2 md:p-1 md:w-[200px]'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards