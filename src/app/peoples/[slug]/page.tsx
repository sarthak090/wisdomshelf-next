import Peoples from "@/seed/peoples.json";
import Image from "next/image";
export async function generateStaticParams() {
  return Peoples.data.topRecommenders.map((post) => ({
    slug: post.slug,
  }));
}
export default async function Page({ params }: { params: { slug: string } }) {
  let data = await fetch(`https://www.mostrecommendedbooks.com/_next/data/bIj70WyuZ2J91H2AorWga/en/${params.slug}-books.json`
  );
  let peoples = await data.json();
  let people = peoples.pageProps.data.recommender;
  const reccomendations =peoples.pageProps.data.recommenderBooks
  return (
    <div>
      <section className="flex justify-center items-center gap-4 font-bold ">
        <div className="flex justify-center">
          <Image
            src={people.imageUrl}
            alt={people.name}
            width={150}
            height={150}
            className="rounded-full "
          />
        </div>
        <div>
          <h1 className="text-3xl">
            {people.name} Recommendations (
            {people.booksCount.length} Books)
          </h1>

          <p
            className="text-md"
            dangerouslySetInnerHTML={{ __html: people.bio }}
          ></p>
        </div>
      </section>

      <section className="my-8">
        <div className="grid grid-cols-2 gap-5">
            {reccomendations.map((book:any)=>(
                <div className="flex items-center gap-2 justify-start border py-4 px-3 rounded-md">
                    <div className="flex-shrink-0">
                        
                        {book.imageUrl&&<Image src={book.imageUrl} alt="" className="rounde-md" width={120} height={100}/>}
                    </div>
                    <div>
                        <p className="text-xl font-semibold mb-2">{book.title}</p>
                        <p className="text-gray-500">{book.subtitle}</p>
                        <p className="text-xs text-gray-500 mb-2">{book.authorName}</p>
<div className="text-md"> <span className="font-bold">Source:</span>

<span className="italic">{book.quote}</span>

</div>

                    </div>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
}
