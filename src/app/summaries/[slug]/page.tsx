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
      <h1
        className="text-4xl font-bold my-8"
        dangerouslySetInnerHTML={{ __html: summaries.title }}
      />

      <div className="grid grid-cols-12">
        <div className="grid col-span-4">
          <div className="">
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
        <div className=" col-span-8">
          <div className=" mt-8">
            <span className="font-semibold">Description</span>
            <p className="my-8">{summaries.description}</p>
          </div>
        </div>
      </div>

      <BreadCrumb
        loc={[
          { label: "Summaries", href: "/summaries" },
          { label: summaries.title, href: `/summaries/${summaries.slug}` },
        ]}
      />
      <section className="grid gap-4 grid-cols-12">
        <div className="col-span-3 sticky  bg-gray-100 rounded-lg px-2">
          <div className="grid px-2">
            {summaries.chapters.map((c) => (
              <a className="capitalize my-2 font-semibold top-[20px]" href={`#${c.title}`}>
                {c.title}
              </a>
            ))}
          </div>
        </div>
        <div className="col-span-9">
          {summaries.chapters.map((chapter) => (
            <div className="my-6">
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
