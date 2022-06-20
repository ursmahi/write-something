import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div className='relative mb-20'>
        <div className='fixed top-0 left-0 right-0'>
        <div className='grid grid-cols-6'>
            <div className=' max-h-full shadow-2xl  bg-blue-50 col-start-1 col-end-7 md:col-span-2 lg:col-start-2 lg:col-end-5'>
               <div className='flex justify-between'>
               <Link href='/'>
               <div className='p-3 text-2xl cursor-pointer'> Write Something</div>
               </Link>
                <div className=''>
                   <Link href='/Newpost'>
                   <button className='p-2 m-2 text-xl bg-blue-500 rounded-full text-white font-extrabold'>New Post</button>
                   </Link>
                </div>
               </div>
            </div>
            </div>
            </div>
        </div>
        )
}

export default Navbar