import Peoples from '@/seed/peoples.json'
import Image from 'next/image'
import Link from 'next/link'
function index() {
    const peoples = Peoples.data.topRecommenders.slice(0,4)
  return (
    <div className='my-8 text-center px-2 xl:px-72'>
        <p className='text-center text-2xl lg:text-5xl text-primary font-bold'>Some of Our Popular Experts
</p>
       <div className='grid grid-cols-2 gap-2 lg:grid-cols-4 my-8'>
        {peoples.map((people)=>(
            <Link href={`/peoples/`+people.slug}>
            <div key={Math.random()} className='flex flex-col items-center'>
                <Image src={people.imageUrl300} alt={people.name} height={150} width={150} className='rounded-full'/>
                <div className='flex justify-center flex-col items-center'>
                    <p className=' font-bold lg:mb-1 lg:text-[20px] '>{people.name}</p>
                    <p className=''>{people.booksCount} Books</p>
                </div>
            </div>

            </Link>
        ))}
       </div>
       <Link className='text-center text-primary' href={'/peoples'}>See all People   
</Link>
    </div>
  )
}

export default index