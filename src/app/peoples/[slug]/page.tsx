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
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/peoples/${params.slug}`;
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch metadata: ${response.statusText}`);
    }

    const people = await response.json();
    return {
      title: people.name || 'Unknown Person',
      openGraph: {
        images: people.featured_img ? [people.featured_img] : [],
      },
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return {
      title: 'Error',
      openGraph: {
        images: [],
      },
    };
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/peoples/${params.slug}`;

  let people, recommendations;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch person data: ${response.statusText}`);
    }

    people = await response.json();

    // Validate the essential data before rendering
    if (!people.name || !people.featured_img) {
      throw new Error('Invalid data: Missing required fields.');
    }

    recommendations = people.recommendations || [];
  } catch (error) {
    console.error('Error fetching person data:', error);
    return (
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold">Error Loading Page</h1>
        <p className="text-md text-red-500">{error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <section className="flex justify-center items-center gap-4 font-bold">
        <div className="flex justify-center">
          <Image
            src={people.featured_img}
            alt={people.name || "No Name"}
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div>
          <h1 className="text-3xl">
            {people.name} Recommendations ({recommendations.length} Books)
          </h1>
          <p className="text-md" dangerouslySetInnerHTML={{ __html: people.bio || "No bio available" }}></p>
        </div>
      </section>

      <section className="my-8">
        <div className="grid grid-cols-2 gap-5">
          {recommendations.length > 0 ? (
            recommendations.map((recommendation: any) => (
              <div key={recommendation.book.id} className="flex items-center gap-2 justify-start border py-4 px-3 rounded-md">
                <div className="flex-shrink-0">
                  {recommendation.book?.thumbnail && (
                    <Image
                      src={recommendation.book?.thumbnail}
                      alt={recommendation.book.title || "Book Image"}
                      className="rounded-md"
                      width={120}
                      height={100}
                    />
                  )}
                </div>
                <div>
                  <p className="text-xl font-semibold mb-2">
                    {recommendation.book.title || "Untitled"}
                  </p>
                  <p className="text-gray-500">
                    {recommendation.book.subtitle || "No subtitle"}
                  </p>
                  <p className="text-xs text-gray-500 mb-2">
                    {recommendation.book.author || "Unknown author"}
                  </p>
                  <div className="text-md">
                    <span className="font-bold">Source:</span>
                    <span className="italic">{recommendation.source || "Unknown"}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No recommendations available.</p>
          )}
        </div>
      </section>
    </div>
  );
}
