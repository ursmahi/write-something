import axios from 'axios'
import Link from 'next/link';
export default function Home({posts}) {

  return (
    <div className='grid grid-cols-6 overflow-x-hidden'>
      <div className='col-start-1 col-end-7 md:col-start-2 lg:col-start-2 lg:col-end-5'>
        <p className='text-md m-5 font-bold'>Recent Posts from Anonymous users</p>
        {/* <Postbox /> */}
        <div className='flex flex-col-reverse'>
        {posts.map((posts)=>{
          return(
              <div className='' key={posts._id}> 
            <p className='text-xl shadow-lg rounded-lg p-2 m-2' >
              {posts.newPost}
            </p>
            <div className='flex justify-between'>
            <Link href={`/${posts._id}/edit`} >
            <button  className='m-5 bg-green-500 rounded-full text-white p-2 font-bold hover:bg-green-600 hover:shadow-lg'> EDIT</button>
            </Link>
            <div>
               <Link href={`/${posts._id}`} >
               <button  className='m-5 bg-red-500 rounded-full text-white p-2 font-bold hover:bg-red-600 hover:shadow-lg'> Delete</button>
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

export async function getServerSideProps(context) {
  const { req } = context;
  if (req) {
    let host = req.headers.host // will give you localhost:3000
  const response = await axios(`https://${host}/api/post/`)
  const {posts} = response.data

  return {
   props: {posts:posts},
  }
}
}