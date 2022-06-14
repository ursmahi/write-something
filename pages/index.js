import Postbox from '../components/Postbox'
import axios from 'axios'
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
export default function Home({posts}) {
  const router = useRouter()
  const [del,setDel]=useState(true)
  const deletePost = async(id)=>{
    try {
      const res = await axios(`/api/post/${id}`,{
        method:'DELETE'
      });
      router.push('/')

    } catch (error) {
      console.log(error)
    }
  }
  const confirmDelete=(id)=>{
    deletePost(id)
  }
  return (
    <div className='grid grid-cols-6 overflow-x-hidden'>
      <div className='col-start-2 col-end-5'>
        <p className='text-md m-5 font-bold'>Recent Posts from Anonymous users</p>
        {/* <Postbox /> */}
        <div className='flex flex-col-reverse'>
        {posts.map((posts)=>{
          return(
              <div className=''> 
            <p className='text-xl shadow-lg rounded-lg p-2 m-2'>
              {posts.newPost}
            </p>
            <div className='flex justify-between'>
            <Link href={`/${posts._id}/edit`}>
            <button className='m-5 bg-green-500 rounded-full text-white p-2 font-bold hover:bg-green-600 hover:shadow-lg'> EDIT</button>
            </Link>
            <div>
               <Link href={`/${posts._id}`}>
               <button className='m-5 bg-red-500 rounded-full text-white p-2 font-bold hover:bg-red-600 hover:shadow-lg'> Delete</button>
               </Link>
              </div>
            </div>
          </div>
          )
        })}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await axios('/api/post/')
  const {posts} = res.data

  return {
   props: {posts:posts},
  }
}
