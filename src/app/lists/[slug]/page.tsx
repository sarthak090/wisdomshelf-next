import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import BreadCrumb from "@/components/shared/BreadCrumb";

export async function generateStaticParams() {
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/lists`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch lists: ${response.statusText}`);
    }

    const lists = await response.json();
    return lists.lists.map((list: any) => ({
      slug: list.slug,
    }));
  } catch (error) {
    console.error('Error fetching lists:', error);
    return [];
  }
}

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/lists/${params.slug}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch list: ${response.statusText}`);
    }

    const list = await response.json();

    return {
      title: list.name || 'Unknown List',
      openGraph: {
        images: list.books[0]?.thumbnail ? [list.books[0].thumbnail] : [],
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
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/lists/${params.slug}`;
  let list;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch list: ${response.statusText}`);
    }

    list = await response.json();

    // Validate essential fields
    if (!list.name || !list.books || list.books.length === 0) {
      throw new Error('Invalid list data: Missing required fields.');
    }
  } catch (error) {
    console.error('Error fetching list data:', error);
    return (
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold">Error Loading Page</h1>
        <p className="text-md text-red-500">{error.message}</p>
      </div>
    );
  }

  return (
    <div >
      <section className="grid py-8 lg:grid-cols-2">
        <div className="grid gap-5">
          <h1 className="lg:text-5xl font-bold">
            {list.books.length} Best {list.name} Books of All Time
          </h1>
          <div>
            <div>
              <strong>Our Goal:</strong> Find the best {list.name} books according to the internet (not just one random person's opinion).
            </div>
            <div>
              <strong>Here's what we did:</strong>
              <ol className="list-decimal ml-8">
                {list.what_we_did && list.what_we_did.slice(0, 3).map((t: any, index: number) => (
                  <li key={index} className="my-3">{t}</li>
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

      <section className="container px-2 lg:px-12 mx-auto">
        <div>
          <section className="grid  lg:grid-cols-4 gap-8 my-8">
            {list.books.length > 0 ? (
              list.books.map((book: any, i: number) => (
                <a key={book.id} href={book.amazon_url}>
                  <div className="relative flex justify-center">
                    {book.thumbnail && (
                      <Image
                        src={book?.thumbnail?.replace("-150x150", "")}
                        className="rounded-lg"
                        objectFit="contain"
                        alt={book.title || "No Title"}
                        width={200}
                        height={380}
                      />
                    )}

                    <div className="styles_badge__NCtKL" data-eq="1">
                      {i + 1}
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="font-bold">{book.title || "Untitled"}</div>
                    <div className="text-gray-500">{book.author || "Unknown Author"}</div>
                  </div>
                </a>
              ))
            ) : (
              <p className="text-center text-gray-500">No books available.</p>
            )}
          </section>
        </div>
      </section>

      <section>
        <div className="text-center my-6 text-3xl font-bold">Sources</div>
        <ol className="grid text-sm lg:grid-cols-3 gap-8 list-decimal">
          {list.sources?.length > 0 ? (
            list.sources.map((source: any, index: number) => (
              <li key={index}>
                <p>{source.label || "No Label"}</p>
                <a href={source.source_url?.url} className="text-blue-500">
                  {source.source_url?.url || "No URL"}
                </a>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">No sources available.</p>
          )}
        </ol>
      </section>
    </div>
  );
}
