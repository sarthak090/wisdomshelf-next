import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import BreadCrumb from "@/components/shared/BreadCrumb";

export async function generateStaticParams() {
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/lists`;

  // fetch data
  const lists = await fetch(url).then((res) => res.json());
  return lists.lists.map((list: any) => ({
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
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/lists/${params.slug}`;

  // fetch data
  const list = await fetch(url).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: list.name,
    openGraph: {
      images: [list.books[0].thumbnail],
    },
  };
}
export default async function Page({ params }: { params: { slug: string } }) {
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/lists/${params.slug}`;
  let list = await fetch(url).then((r) => r.json());

  return (
    <div>
      <section className="grid py-8 grid-cols-2">
        <div className="grid gap-5">
          <h1 className="lg:text-5xl font-bold">
            {list.books.length} Best {list.name} Books of All Time
          </h1>
          <div>
            <div>
              <strong>Our Goal:</strong> Find the best {list.name} books
              according to the internet (not just one random person's opinion).
            </div>
            <div>
              <strong>Here's what we did:</strong>
              <ol className="list-decimal">
                {list.what_we_did.slice(0,3).map((t:any) => (
                  <li className="my-3">{t}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <div></div>
      </section>
      <BreadCrumb
          loc={[
            { label: "Lists", href: "/lists" },
            { label: list.name, href: `/lists/${list.slug}` },
          ]}
        />
      <section className="container px-12 mx-auto">       
      
         
        <div>
          <section className="grid grid-cols-4 gap-8 my-8">
            {list.books.map((book, i) => (
              <a href={book.amazon_url}>
                <div className="relative">
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
                  <div className="font-bold">{book.title}</div>
                  <div className="text-gray-500">{book.author}</div>
                  
                </div>
              </a>
            ))}
          </section>


        </div>

      
      </section>
      <section>
          <div className="text-center my-6 text-3xl font-bold">Sources</div>
          <ol className="grid text-sm grid-cols-3 gap-8 list-decimal">
            {list.sources.map((source)=>(
              <li>
                <p>{source.label}</p>
                <a href={source.source_url.url} className="text-blue-500">{source.source_url.url}</a>
              </li>
            ))}

          </ol>
        </section>
    </div>
  );
}
