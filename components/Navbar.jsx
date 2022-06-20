import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div className='relative mb-20'>
        <div className='fixed top-0 left-0 right-0'>
        <div className='grid grid-cols-6'>
            <div className='col-start-2 col-end-6 max-h-full shadow-2xl  bg-blue-50 sm:col-start-1 sm:col-end-7'>
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