import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function ReplyPost({posts,host}) {
    const router = useRouter()
    const id = router.query.id
    const [userInput,setUserInput] = useState('')
    let axios_url =' '
    if (host.startsWith("localhost")){
      axios_url = `http://${host}/api/post/${id}`
    }
    else{
      axios_url = `http://${host}/api/post/${id}`

    }
    const handleForm=async(e)=>{
        e.preventDefault()
        try {

            const res = await axios(axios_url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({
                    'newPost':posts.newPost,
                    'reply':[...posts.reply,userInput] })
            })  
            router.push('/')
        } catch (error) {
        }
    }
    const ret=()=>{
        return(
            posts.reply.map((reply)=>{
                return(
                  <div className="flex justify-center mb-4" key={reply}>
                  <div className="block p-6 rounded-lg shadow-lg bg-white w-full ">
                    <p className="text-gray-700 text-base mb-4 font-bold">
                      {reply}
                    </p>
                    </div>
                </div>
                )
            })
        )
    }
  return (
    <div className='grid grid-cols-6'>
    <div className='mt-10 col-start-1 col-end-7 md:col-start-2 lg:col-start-2 lg:col-end-5'>
    <div className="flex justify-center mb-4">
                  <div className="block p-6 rounded-lg shadow-lg bg-white w-full ">
                    <p className="text-gray-700 text-2xl mb-4 font-bold">
                      {posts.newPost}
                    </p>
                    </div>
                </div>

<p className='font-bold mt-5 ml-5 text-xl'>What is your Reply</p>
</div>
<div className='mt-10 col-start-1 col-end-7 md:col-start-2 lg:col-start-2 lg:col-end-5'>
    <form className='flex flex-1 flex-col' onSubmit={handleForm}>
       
        <textarea  id="var_1" rows="5" cols="10" wrap="soft" value={userInput.reply} onChange={(e) => { setUserInput(e.target.value) }} type='text' placeholder="What's on your mind .." className='resize-none overflow-hidden h-auto rounded-2xl p-2 shadow-md w-full text-xl  outline-none' maxLength='256'></textarea>
    </form>
    <button onClick={handleForm} disabled={!userInput} className='p-3 m-3  bg-purple-500 text-white rounded-2xl text-2xl disabled:opacity-40'>REPLY</button>
    {posts.reply.length && <p className='font-bold mt-5 ml-5 text-xl'>Previous replies</p>}
  {ret()}
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
       props: {posts:post,host:host},
      }
  }
  }

export default ReplyPost;