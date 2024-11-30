 
import Image from 'next/image';
import Item from './Item'
import React from "react";
import Link from 'next/link';

export default function Featured(props) {
  const {
    series: { series },
  } = props;

    return (
    <div className='px-32 text-center my-8'>
        <p className="text-3xl lg:text-5xl text-center font-bold text-primary">Popular Series</p>
        <div className='grid grid-cols-3 gap-4  my-8'>
        {series.slice(4, 7).map((s) => (
          <Link href={`/series/${s.slug}`}> 
          <div className='border py-8 text-center rounded-lg text-gray-600'>
               <div className='mb-2'>{s.name}</div>
               <div className='flex gap-2  justify-center '>
              {s.books.slice(0,3).map((book)=>(
                <Image src={book.thumbnail} alt={book.title} height={320} className='h-40 rounded-lg object-cover' width={100}/>
              ))}
            </div>
          </div>
          </Link>
            
       ))}
        </div>
        <Link className='text-center font-semibold text-primary' href={'/series'}>See all Series</Link>
      
    </div>
  );
}
