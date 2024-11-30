import Peoples from '@/seed/peoples.json'
import Image from 'next/image'
import Link from 'next/link'
function Routines({posts}) {
   
   return (
    <div className='my-12 text-center px-2 xl:px-40'>
        <p className='text-center text-2xl lg:text-5xl text-primary font-bold'>Routines & Rituals of Successful People

</p>
       <div className='grid grid-cols-2 gap-4 lg:grid-cols-3 my-8'>
        {posts.slice(0,4).map((post)=>(
          <Link href={post.slug}>
            <div key={Math.random()} className='flex flex-col gap-2  items-center'>
                <Image src={post.x_featured_media_medium} alt={post.title.rendered} height={120} width={350} className='rounded-lg'/>
                <div className='flex justify-center flex-col items-center'>
                    <p className=' font-semibold mb-1 text-gray-500  ' dangerouslySetInnerHTML={{__html:post.title.rendered}}/>
                 </div>
            </div>
            </Link>
        ))}
       </div>
       <Link className='text-center font-semibold text-primary' href={'/routines'}>See all Routines
   
</Link>
    </div>
  )
}

export default Routines;