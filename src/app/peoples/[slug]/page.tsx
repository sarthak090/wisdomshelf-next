import Peoples from "@/seed/peoples.json";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from 'next'
import Recommendation from "@/components/pages/People/Recommendation";
import Written from "@/components/pages/People/Written";
import Books from "@/components/pages/People/Books";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWikipediaW } from "react-icons/fa";

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

  let people, recommendations, written;

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
    written = people.written|| []

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
      <section className="flex my-8 justify-center items-center gap-4 font-bold">
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
          <div className="flex gap-3 items-center my-4">
            <a href={people.social_links.insta_handle} target="_blank">

            <CiInstagram className="size-6"/>

            </a>
            <a href={people.social_links.youtube_channel_link} target="_blank">

            <FaYoutube className="size-6"/>
            </a>

            <a href={people.social_links.blog_link} target="_blank">

            <FaGlobe className="size-6" />
            </a>
            <a href={people.social_links.twitter_handle} target="_blank">

            <FaXTwitter className="size-6"/>
            </a>
            <a href={people.social_links.wikipedia_link} target="_blank">

            <FaWikipediaW  className="size-6"/>
</a>

          </div>
        </div>
      </section>

     

      <section className="my-8">
        <Books  recommendations={recommendations} written={written} people={people}  />
      </section>
      
    </div>
  );
}
