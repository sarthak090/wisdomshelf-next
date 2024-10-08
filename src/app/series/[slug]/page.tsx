 
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from 'next'
import Link from "next/link";
import BreadCrumb from "@/components/shared/BreadCrumb";

export async function generateStaticParams() {
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/series`
   

 
  // fetch data
  const series = await fetch(url).then((res) => res.json())
  return series.series.map((series:any) => ({
    slug: series.slug,
  }));
}
type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
  { params,  }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/series/${params.slug}`
   

 
  // fetch data
  const series = await fetch(url).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  
  return {
    title: series.name,
    openGraph: {
      images: [series.books[0].thumbnail],
    },
  }
}
export default async function Page({ params }: { params: { slug: string } }) {
   
    const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/series/${params.slug}`
  let series = await fetch(url
  ).then((r)=>r.json());
 
  return (
    <div>
      <section>
        <h1 className="text-4xl font-bold my-8">{series.name}</h1>

        <div  className="grid grid-cols-12">
          <div className="grid col-span-4">
          <div className="series_thumbnails">
            {series.books.slice(0,3).map((b)=>(
                <Image  src={b.thumbnail.replace('-150x150','')} className="rounded-lg" objectFit="contain" alt={b.name} width={200} height={380}/>
              
            ))}
            </div>
            </div>
          <div className=" col-span-8">
            <div  className=" mt-8"><span className="font-semibold">Description</span>
            <p className="my-8">{series.description}</p>
            </div>
            
          </div>
         </div>
              <BreadCrumb loc={[{label:'Series',href:'/series'},{label:series.name,href:`/series/${series.slug}`}]}/>
         <div>
          <section  className="grid grid-cols-4 gap-8 my-8">
            {series.books.map((book,i)=>(

              <a href={book.amazon_url}>
                <div className="relative">
                <Image  src={book.thumbnail.replace('-150x150','')} className="rounded-lg" objectFit="contain" alt={book.name} width={200} height={380}/>

                <div className="styles_badge__NCtKL" data-eq="1">{i+1}</div>

                </div>
                <div className="mt-5">
         
                  <div className="font-bold">{book.title}</div>
                  <div className="text-gray-500">{book.author}</div>
                  <div className="flex gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8125 9.75H12.9375C12.8339 9.75 12.75 9.83395 12.75 9.9375V11.8125C12.75 11.9161 12.8339 12 12.9375 12H14.8125C14.9161 12 15 11.9161 15 11.8125V9.9375C15 9.83395 14.9161 9.75 14.8125 9.75Z" fill="#2B2B2B"></path><path d="M18.5625 9.75H16.6875C16.5839 9.75 16.5 9.83395 16.5 9.9375V11.8125C16.5 11.9161 16.5839 12 16.6875 12H18.5625C18.6661 12 18.75 11.9161 18.75 11.8125V9.9375C18.75 9.83395 18.6661 9.75 18.5625 9.75Z" fill="#2B2B2B"></path><path d="M14.8125 13.5H12.9375C12.8339 13.5 12.75 13.5839 12.75 13.6875V15.5625C12.75 15.6661 12.8339 15.75 12.9375 15.75H14.8125C14.9161 15.75 15 15.6661 15 15.5625V13.6875C15 13.5839 14.9161 13.5 14.8125 13.5Z" fill="#2B2B2B"></path><path d="M18.5625 13.5H16.6875C16.5839 13.5 16.5 13.5839 16.5 13.6875V15.5625C16.5 15.6661 16.5839 15.75 16.6875 15.75H18.5625C18.6661 15.75 18.75 15.6661 18.75 15.5625V13.6875C18.75 13.5839 18.6661 13.5 18.5625 13.5Z" fill="#2B2B2B"></path><path d="M7.3125 13.5H5.4375C5.33395 13.5 5.25 13.5839 5.25 13.6875V15.5625C5.25 15.6661 5.33395 15.75 5.4375 15.75H7.3125C7.41605 15.75 7.5 15.6661 7.5 15.5625V13.6875C7.5 13.5839 7.41605 13.5 7.3125 13.5Z" fill="#2B2B2B"></path><path d="M11.0625 13.5H9.1875C9.08395 13.5 9 13.5839 9 13.6875V15.5625C9 15.6661 9.08395 15.75 9.1875 15.75H11.0625C11.1661 15.75 11.25 15.6661 11.25 15.5625V13.6875C11.25 13.5839 11.1661 13.5 11.0625 13.5Z" fill="#2B2B2B"></path><path d="M7.3125 17.25H5.4375C5.33395 17.25 5.25 17.3339 5.25 17.4375V19.3125C5.25 19.4161 5.33395 19.5 5.4375 19.5H7.3125C7.41605 19.5 7.5 19.4161 7.5 19.3125V17.4375C7.5 17.3339 7.41605 17.25 7.3125 17.25Z" fill="#2B2B2B"></path><path d="M11.0625 17.25H9.1875C9.08395 17.25 9 17.3339 9 17.4375V19.3125C9 19.4161 9.08395 19.5 9.1875 19.5H11.0625C11.1661 19.5 11.25 19.4161 11.25 19.3125V17.4375C11.25 17.3339 11.1661 17.25 11.0625 17.25Z" fill="#2B2B2B"></path><path d="M14.8125 17.25H12.9375C12.8339 17.25 12.75 17.3339 12.75 17.4375V19.3125C12.75 19.4161 12.8339 19.5 12.9375 19.5H14.8125C14.9161 19.5 15 19.4161 15 19.3125V17.4375C15 17.3339 14.9161 17.25 14.8125 17.25Z" fill="#2B2B2B"></path><path d="M21 3H18.75V1.5H16.875V3H7.125V1.5H5.25V3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5V21C1.5 21.3978 1.65804 21.7794 1.93934 22.0607C2.22064 22.342 2.60218 22.5 3 22.5H21C21.3978 22.5 21.7794 22.342 22.0607 22.0607C22.342 21.7794 22.5 21.3978 22.5 21V4.5C22.5 4.10218 22.342 3.72064 22.0607 3.43934C21.7794 3.15804 21.3978 3 21 3ZM20.4375 20.4375H3.5625V8.25H20.4375V20.4375Z" fill="#2B2B2B"></path></svg>
                    {book.published_on}</div>
                </div>
              </a>
            ))}
          </section>
         </div>
      </section>
    </div>
  );
}
