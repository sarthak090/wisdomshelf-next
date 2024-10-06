'use client'
import { useState } from 'react';
import Peoples from '@/seed/peoples.json';
import Link from 'next/link';

function Page() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter the topRecommenders based on the selected category
  const filteredRecommenders = selectedCategory
    ? Peoples.data.topRecommenders.filter(people =>
        people.category.includes(selectedCategory)
      )
    : Peoples.data.topRecommenders;

  // Function to handle category selection
  const handleCategorySelection = (cat:any) => {
    if (cat === "all") {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(cat);
    }
  };

  return (
    <div>
        <div className={'text-center text-4xl my-32 font-bold'}>Peoples</div>

      <main className='grid grid-cols-12 gap-4'>
        <aside className='border rounded-sm px-4 py-4 max-h-min col-span-2'>
          <div
            className={`my-1 cursor-pointer ${selectedCategory === null ? 'font-bold' : ''}`}
            onClick={() => handleCategorySelection("all")}
          >
            All
          </div>
          {Peoples.data.recommenderCategories.map((cat) => (
            <div
              key={cat}
              className={`my-1 cursor-pointer ${selectedCategory === cat ? 'font-bold' : ''}`}
              onClick={() => handleCategorySelection(cat)}
            >
              {cat}
            </div>
          ))}
        </aside>
        <section className='col-span-10 grid grid-cols-4 gap-4'>
          {filteredRecommenders.map((people) => (
            <Link href={`/peoples/`+people.slug}>
            <div className='border grid items-center justify-center' key={people.name}>
              {people.imageUrl300&& <img
                className='people-logo rounded-full'
                width={150}
                height={150}
                alt={`${people.name} profile`}
                src={people.imageUrl300}
              />}
              
              <div className='flex flex-col align-middle items-center justify-center'>
                <div className='font-bold'>
                  <Link className='' href={`/peoples/`+people.slug}>{people.name}</Link>
                  </div>
                <div>{people.booksCount} Books</div>
              </div>
            </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Page;
