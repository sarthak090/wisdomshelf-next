'use client'
import { useState } from 'react';
import Peoples from '@/seed/peoples.json';
import Link from 'next/link';
async function getSeries(){
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/series/`
  const data = await fetch(url).then((r)=>r.json())
  return data
}
async function Page() {
   const data = await getSeries();
   const seriesData = data.series
    
  return (
    <div>
        <div className={'text-center text-4xl my-32 font-bold'}>Series</div>

      <main className='grid grid-cols-12 gap-4'>
         
        <section className='col-span-12 grid grid-cols-4 gap-4 bg-gray-100 rounded-lg px-4 py-8'>
           {
            seriesData.map((series:any)=>(
              <Link className='text-blue-500 hover:underline' href={`/series/${series.slug}`}>{series.name}</Link>
            ))
           }
        </section>
      </main>
    </div>
  );
}

export default Page;
