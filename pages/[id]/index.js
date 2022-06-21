import React from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
function EachPost({post,host}) {
    const router = useRouter()
    const id = router.query.id
    let axios_url =' '
    if (host.startsWith("localhost")){
      axios_url = `http://${host}/api/post/${id}`
    }
    else{
      axios_url = `http://${host}/api/post/${id}`

    }
    const  deletePost=async()=>{
        try {
            const res = await axios(axios_url,{
            method:'DELETE'});
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='grid grid-cols-6 overflow-x-hidden'>
    <div className='col-start-1 col-end-7 md:col-start-2 lg:col-start-2 lg:col-end-5'>
    <div className="flex justify-center mb-4">
                  <div className="block p-6 rounded-lg shadow-lg bg-white w-full ">
                    <p className="text-gray-700 text-2xl mb-4 font-bold">
                      {post.newPost}
                    </p>
              <button className='mt-5 bg-red-500 rounded-full text-white p-2 font-bold hover:bg-red-600 hover:shadow-lg' onClick={deletePost}>CONFIRM DELETE</button>
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
    let axios_url =' '
    if (host.startsWith("localhost")){
      axios_url = `http://${host}/api/post/${id}`
    }
    else{
      axios_url = `http://${host}/api/post/${id}`

    }
  const response = await axios(axios_url)
    const {post} = response.data
    return {
     props: {post:post,host:host},
    }
}
}

export default EachPost;