import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import BreadCrumb from "@/components/shared/BreadCrumb";

export async function generateStaticParams() {
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/summaries`;

  // fetch data
  const summaries = await fetch(url).then((res) => res.json());
  return summaries.summaries.map((list: any) => ({
    slug: list.slug,
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
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/summaries/${params.slug}`;

  // fetch data
  const summaries = await fetch(url).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: summaries.title,
    openGraph: {
      images: [summaries.book.thumbnail],
    },
  };
}
export default async function Page({ params }: { params: { slug: string } }) {
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/summaries/${params.slug}`;
  let summaries = await fetch(url).then((r) => r.json());

  return (
    <div>
    

      <div className="grid my-8 grid-cols-1  lg:grid-cols-12">
        <div className="flex justify-center w-full  col-span-3  ">
          <div className="flex justify-center">
            <Image
              src={summaries.book.thumbnail.replace("-150x150", "")}
              className="rounded-lg"
              objectFit="contain"
              alt={summaries.title}
              width={200}
              height={380}
            />
          </div>
        </div>
        <div className="  col-span-9 pl-2">
          <div className=" mt-8">
          <h1
        className="text-5xl font-bold mb-4"
        dangerouslySetInnerHTML={{ __html: summaries.title }}
      />
            <span className="font-bold">Description</span>
            <p className="my-8 text-[19px] text-gray-500"> 
            <span dangerouslySetInnerHTML={{__html:summaries.description}}/>
            </p>
            <p className="italic text-sm text-gray-500">P.S.: As an Amazon Associate, we earn money from purchases made through links in this page. But the summaries are totally free!

</p>
          </div>
        </div>
      </div>

      <BreadCrumb
        loc={[
          { label: "Summaries", href: "/summaries" },
          { label: summaries.title, href: `/summaries/${summaries.slug}` },
        ]}
      />
      <section className="grid gap-4  grid-cols-1 lg:grid-cols-12">
        <div className="col-span-3 hidden lg:block sticky  bg-gray-100 rounded-lg px-2">
          <div className="grid px-2">
            {summaries.chapters.map((c,i) => (
              <a key={i} className="capitalize my-2 hover:translate-x-3 transition-all delay-150 top-[20px]" href={`#${c.title}`}>
                {c.title}
              </a>
            ))}
          </div>
        </div>
        <div className="col-span-9">
          {summaries.chapters.map((chapter,i) => (
            <div className="my-6" key={i}>
              <div
                className="text-3xl capitalize mb-4 font-bold"
                id={chapter.title}
              >
                {chapter.title}
              </div>
              <div>
                <p dangerouslySetInnerHTML={{ __html: chapter.summary }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
