import Image from "next/image";
import Peoples from "@/components/pages/Home/Peoples";
import Routines from "@/components/pages/Home/Routines";
import Featured from "@/components/pages/Home/Featured/index";
import Testimonials from "@/components/pages/Home/Testimonials";
import Vison from "@/components/pages/Home/Vision/Vison";
import Hero from "@/components/pages/Home/Hero";
import ListsFeatured from "@/components/pages/Home/Featured/Lists";

async function getData() {
  const url = process.env.NEXT_PUBLIC_CMS_URL + `/books-api/v1/series/`;
  const postUrl = process.env.NEXT_PUBLIC_CMS_URL + `/wp/v2/posts`;
  const series = await fetch(url).then((r) => r.json());
  const posts = await fetch(postUrl).then((r) => r.json());
  return {
    series: series,
    posts: posts,
  };
}
export const metadata={
  title:'Wisdom Shelf- Dive into the brains of prominent people to discover their recommended books, routines, & rituals.',
  description:'Dive into the brains of prominent people to discover their recommended books, routines, & rituals. 500+ experts, 1500+ series, 1000+ […]'
}
export default async function Home() {
  const { series, posts } = await getData();

  return (
    <div>
    <Hero/>
      <Peoples />
      <Routines posts={posts} />
      <ListsFeatured/> 
      <Featured series={series} />
      <Testimonials />
      <Vison />
    </div>
  );
}
