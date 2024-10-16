import Peoples from '@/seed/peoples.json'
import Image from 'next/image'
import Link from 'next/link'
function Routines(posts) {
    const peoples = Peoples.data.topRecommenders.slice(0,3)
  return (
    <div className='my-12 text-center px-2 xl:px-60'>
        <p className='text-center text-3xl lg:text-5xl text-blue-500 font-bold'>Routines & Rituals of Successful People

</p>
       <div className='grid grid-cols-2 gap-4 lg:grid-cols-3 my-8'>
        {peoples.map((people)=>(
            <div key={Math.random()} className='flex flex-col gap-4  items-center'>
                <Image src={people.imageUrl300} alt={people.name} height={120} width={250} className='rounded-lg'/>
                <div className='flex justify-center flex-col items-center'>
                    <p className=' font-bold mb-1 text-[20px] '>{people.name}</p>
                 </div>
            </div>
        ))}
       </div>
       <Link className='text-center font-semibold ' href={'/routines'}>See all Routines
   
</Link>
    </div>
  )
}

export default Routines;