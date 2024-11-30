import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import BreadCrumb from "@/components/shared/BreadCrumb";
import SeriesHeader from "@/components/pages/Series/SeriesHeader";
import { FaCalendarAlt } from "react-icons/fa";

export async function generateStaticParams() {
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/series`;

  // fetch data
  const series = await fetch(url).then((res) => res.json());
  return series.series.map((series: any) => ({
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
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/series/${params.slug}`;

  // fetch data
  const series = await fetch(url).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: series.name,
    openGraph: {
      images: [series.books[0].thumbnail],
    },
  };
}
export default async function Page({ params }: { params: { slug: string } }) {
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/series/${params.slug}`;
  let series = await fetch(url).then((r) => r.json());

  return (
    <div>
      <section>
        <h1 className="text-4xl font-bold my-8">{series.name}</h1>

        <SeriesHeader series={series} />
        <BreadCrumb
          loc={[
            { label: "Series", href: "/series" },
            { label: series.name, href: `/series/${series.slug}` },
          ]}
        />
        <div>
          <section className="grid grid-cols-1 lg:grid-cols-4 gap-8 my-8">
            {series.books.map((book, i) => (
              <a target="_blank" className="" href={book.amazon_url}>
                <div className="relative flex justify-center">
                  <Image
                    src={book.thumbnail.replace("-150x150", "")}
                    className="rounded-lg"
                    objectFit="contain"
                    alt={book.name}
                    width={200}
                    height={380}
                  />

                  <div className="styles_badge__NCtKL" data-eq="1">
                    {i + 1}
                  </div>
                </div>
                <div className="mt-5">
                  <div className="font-bold">
                    <span dangerouslySetInnerHTML={{ __html: book.title }} />
                  </div>
                  <div className="text-gray-500">{book.author}</div>
                  <div className="flex gap-2">
                  <FaCalendarAlt />

                    {book.published_on}
                  </div>
                </div>
              </a>
            ))}
          </section>
        </div>
      </section>
    </div>
  );
}
