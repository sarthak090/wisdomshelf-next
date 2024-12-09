import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import BreadCrumb from "@/components/shared/BreadCrumb";
import SeriesHeader from "@/components/pages/Series/SeriesHeader";
import { FaCalendarAlt } from "react-icons/fa";

export async function generateStaticParams() {
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/wp/v2/posts`;
 
 
  // fetch data
  const series = await fetch(url).then((res) => res.json());
  return series.map((series: any) => ({
    slug: series.slug,
  }));
}
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/wp/v2/posts?slug=${params.slug}`;
 
  // fetch data
  const posts = await fetch(url).then((res) => res.json());
  if(posts.length==0){
    return {
      title:'Not Found'
    }
  }
const post = posts[0]
  // optionally access and extend (rather than replace) parent metadata

  return {
    title: post.title.rendered,
    // openGraph: {
    //   images: [series.books[0].thumbnail],
    // },
  };
}
export default async function Page({ params }: { params: { slug: string } }) {
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/wp/v2/posts?slug=${params.slug}`;
  let posts = await fetch(url).then((r) => r.json());
  if(posts.length==0){
    return (
      <>
      Not found
      </>
    )
  }
const post= posts[0]
  return (
    <div>
      <section className="lg:px-12 px-2">
        <section className="grid my-8 justify-center align-top grid-cols-12 gap-4">
            <div className="col-span-3 ">
                <Image src={post.x_featured_media_large} className="rounded-sm" alt={post.title.rendered} height={300} width={500}/>
            </div>
            <div className="col-span-9 border rounded-lg p-4">
        <h1 className="text-4xl font-bold ">{post.title.rendered}</h1>

                <p className="" dangerouslySetInnerHTML={{__html:post.content.rendered}}/>

                
            </div>
        </section>

         
        
      </section>
    </div>
  );
}
