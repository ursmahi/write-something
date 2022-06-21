import axios from 'axios'
import Link from 'next/link';
export default function Home({posts}) {

  return (
    <div className='grid grid-cols-6 overflow-x-hidden 	'>
      <div className='col-start-1 col-end-7 md:col-start-2 lg:col-start-2 lg:col-end-5'>
        <p className='text-md m-5 font-bold'>Recent Posts from Anonymous users</p>
        {/* <Postbox /> */}
        <div className='flex flex-col-reverse'>
        {posts.map((posts)=>{
          return(
              <div className='border-x border-y' key={posts._id}> 
            <div className="flex justify-center ">
                  <div className="block p-6 rounded-lg shadow-lg bg-white w-full ">
                    <p className="text-gray-700  mb-4 font-bold text-xl">
                      {posts.newPost}
                    </p>
            <div className='flex justify-between mb-4'>
            
            <div className=''>
               <Link href={`/${posts._id}/reply`} >
               <button  className='m-2 bg-yellow-300  rounded-full text-black p-2 font-bold hover:bg-purple-600 hover:text-white hover:shadow-lg'> Reply</button>
               </Link>
              </div>
              <div className='flex'>
              <div className=''>
               <Link href={`/${posts._id}/replies`} >
               <button  className='  h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-purple-600 rounded-full focus:shadow-outline hover:bg-pink-400 font-bold' > Replies {<span className=' items-center  px-2 py-1  font-bold text-black bg-white rounded-full'>{posts.reply.length}</span>}</button>
               </Link>
               </div>
              <div className=''>
              <Link href={`/${posts._id}/edit`} >
            <button  className='m-2 bg-green-500 rounded-full text-white p-2 font-bold hover:bg-green-600 hover:shadow-lg'> EDIT</button>
            </Link>
                </div>
            <div className=''>
               <Link href={`/${posts._id}`} >
               <button  className='m-2 bg-red-500 rounded-full text-white p-2 font-bold hover:bg-red-600 hover:shadow-lg'> Delete</button>
               </Link>
              </div>
                </div>
            </div>
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

export async function getServerSideProps(context) {
  const { req } = context;
  if (req) {
    let host = req.headers.host // will give you localhost:3000
    let axios_url =' '
    if (host.startsWith("localhost")){
      axios_url = `http://${host}/api/post/`
    }
    else{
      axios_url = `http://${host}/api/post/`

    }
  const response = await axios(axios_url)
  const {posts} = response.data

  return {
   props: {posts:posts},
  }
}
}