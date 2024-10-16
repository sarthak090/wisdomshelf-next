import Image from "next/image";
import Peoples from '@/components/pages/Home/Peoples'
import Routines from "@/components/pages/Home/Routines";
import Featured from "@/components/pages/Home/Featured/index";
import Testimonials from "@/components/pages/Home/Testimonials";
import Vison from "@/components/pages/Home/Vision/Vison";

async function getData (){
  const url =process.env.NEXT_PUBLIC_CMS_URL +`/books-api/v1/series/`
 const series  = await fetch(url).then((r)=>r.json())
return {
  series:series
  
};
}
export default async function Home() {
const {series} = await getData();

 
  return (
   <div>
    <Peoples/>
    <Routines/>
    <Featured series={series}/>
    <Testimonials/>
    <Vison/>

    </div>
  );
}
