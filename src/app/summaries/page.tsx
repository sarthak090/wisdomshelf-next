 
 
import Link from "next/link";
async function getSummaries() {
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/summaries/`;
  const data = await fetch(url).then((r) => r.json());
 
  return data;
}
async function Page() {
  const data = await getSummaries();
  const  {summaries}  = data;
 
  return (
    <div>
      <div className={"text-center text-4xl my-32 font-bold"}>Summaries</div>

      <main className="grid gap-4">
        
          <section className=" bg-gray-100 rounded-lg px-4 py-8">
             
            <div className="grid  grid-cols-3 gap-6 my-4">
            {summaries.map((p)=>(
            <Link href={`/summaries/${p.slug}`}>
              <span dangerouslySetInnerHTML={{__html:p.title}}/>
              </Link>

            ))}
            </div>
            
          </section>
        
      </main>
    </div>
  );
}

export default Page;
