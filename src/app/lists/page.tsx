
import Link from "next/link";
async function getLists() {
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/lists-genres/`;
  const data = await fetch(url).then((r) => r.json());
 
  return data;
}
export const metadata = {
  title: "List",
};
async function Page() {
  const data = await getLists();
  const  lists  = data;
 
  return (
    <div>
      <div className={"text-center text-4xl my-32 font-bold"}>Lists</div>

      <main className="grid gap-4">
        {lists.map((list) => (
          <section className=" bg-gray-100 rounded-lg px-4 py-8">
            <div className="text-2xl mb-2 font-semibold text-gray-700">
              {list.category.name}
            </div>
            <hr className="py-3" />
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 my-4">
            {list.posts.map((p)=>(
            <Link href={`/lists/${p.slug}`}>{p.title}</Link>

            ))}
            </div>
            
          </section>
        ))}
      </main>
    </div>
  );
}

export default Page;
