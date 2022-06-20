import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'

function Newpost() {
    const [userInput, setUserInput] = useState('')
    const router = useRouter()
    const handleForm=async(e)=>{
        e.preventDefault()
        try {
            const res = await axios('/api/post', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({
                    'newPost':userInput
                })
            })
            router.push('/')
            setUserInput('')
        } catch (error) {
            
        }
    }
    return (
        <div className='grid grid-cols-6'>
            <div className='col-start-1 col-end-7 md:col-start-2 lg:col-start-2 lg:col-end-5'>
            <form className='flex flex-1 flex-col' onSubmit={handleForm}>
               
                <textarea  id="var_1" rows="5" cols="10" wrap="soft" value={userInput} onChange={(e) => { setUserInput(e.target.value) }} type='text' placeholder="What's on your mind .." className='resize-none overflow-hidden h-auto rounded-2xl p-2 shadow-md w-full text-xl  outline-none' maxLength='256'></textarea>
            </form>
            <button onClick={handleForm} disabled={!userInput} className='p-3 m-3  bg-blue-500 text-white rounded-2xl text-2xl disabled:opacity-40'>Post</button>
        </div>
        </div>
    )
}

export default Newpost