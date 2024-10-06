import Peoples from "@/seed/peoples.json";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from 'next'

export async function generateStaticParams() {
  return Peoples.data.topRecommenders.slice(0, 30).map((post) => ({
    slug: post.slug,
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
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/peoples/${params.slug}`

 
  // fetch data
  const people = await fetch(url).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  
  return {
    title: people.name,
    openGraph: {
      images: [people.featured_img],
    },
  }
}
export default async function Page({ params }: { params: { slug: string } }) {
   
    const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/peoples/${params.slug}`
  let data = await fetch(url
  );
  let people = await data.json();
  const reccomendations = people.recommendations;
  return (
    <div>
      <section className="flex justify-center items-center gap-4 font-bold ">
        <div className="flex justify-center">
          <Image
            src={people.featured_img}
            alt={people.name}
            width={150}
            height={150}
            className="rounded-full "
          />
        </div>
        <div>
          <h1 className="text-3xl">
            {people.name} Recommendations ({people.recommendations.length}{" "}
            Books)
          </h1>

          <p
            className="text-md"
            dangerouslySetInnerHTML={{ __html: people.bio }}
          ></p>
        </div>
      </section>

      <section className="my-8">
        <div className="grid grid-cols-2 gap-5">
          {reccomendations.map((recommendation: any) => (
            <div className="flex items-center gap-2 justify-start border py-4 px-3 rounded-md">
              <div className="flex-shrink-0">
                {recommendation.book.thumbnail && (
                  <Image
                    src={recommendation.book.thumbnail}
                    alt=""
                    className="rounde-md"
                    width={120}
                    height={100}
                  />
                )}
              </div>
              <div>
                <p className="text-xl font-semibold mb-2">
                  {recommendation.book.title}
                </p>
                <p className="text-gray-500">{recommendation.book.subtitle}</p>
                <p className="text-xs text-gray-500 mb-2">
                  {recommendation.book.author}
                </p>
                <div className="text-md">
                  {" "}
                  <span className="font-bold">Source:</span>
                  <span className="italic">{recommendation.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
