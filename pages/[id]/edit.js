import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function editPost({posts}) {
    const router = useRouter()
    const id = router.query.id
    const [userInput,setUserInput] = useState({
        'newPost':posts.newPost
    })
    const handleForm=async(e)=>{
        e.preventDefault()
        try {
            const res = await axios(`/api/post/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({
                    'newPost':userInput.newPost})
            })  
            router.push('/')
        } catch (error) {
            
        }
    }
  return (
    <div className='grid grid-cols-6'>
    <div className='col-start-2 col-end-5 mt-10'>
    <form className='flex flex-1 flex-col' onSubmit={handleForm}>
       
        <textarea  id="var_1" rows="5" cols="10" wrap="soft" value={userInput.newPost} onChange={(e) => { setUserInput({'newPost':e.target.value}) }} type='text' placeholder="What's on your mind .." className='resize-none overflow-hidden h-auto rounded-2xl p-2 shadow-md w-full text-xl  outline-none' maxLength='256'></textarea>
    </form>
    <button onClick={handleForm} disabled={!userInput} className='p-3 m-3  bg-blue-500 text-white rounded-2xl text-2xl disabled:opacity-40'>UPDATE</button>
</div>
</div>
  )
}

export async function getServerSideProps({params}) {
    const id = params.id
    console.log(id)
  const res = await axios(`/api/post/${id}`)
  const {post} = res.data
return {
props: {posts:post}, 
}
}

export default editPost;