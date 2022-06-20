import React from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
function EachPost({post,host}) {
    const router = useRouter()
    const id = router.query.id
    const  deletePost=async()=>{
        try {
            const res = await axios(`https://${host}/api/post/${id}`,{
            method:'DELETE'});
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='grid grid-cols-6 overflow-x-hidden'>
    <div className='col-start-1 col-end-7 md:col-span-2 lg:col-start-2 lg:col-end-5'>
          <p className='text-xl shadow-lg rounded-lg p-2 m-2' >
            {post.newPost}
          </p>
          <div className='flex justify-between'>
        <div>
              <button className='m-5 bg-red-500 rounded-full text-white p-2 font-bold hover:bg-red-600 hover:shadow-lg' onClick={deletePost}>CONFIRM DELETE</button>
            </div>
      </div>
    </div>
  </div>
  )
}

export async function getServerSideProps(context){
  const { req,params } = context;
  if (req) {
    let host = req.headers.host // will give you localhost:3000
    const id = params.id;
  const response = await axios(`https://${host}/api/post/${id}`)
    const {post} = response.data
    return {
     props: {post:post,host:host},
    }
}
}

export default EachPost;