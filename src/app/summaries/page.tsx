import List from "@/components/shared/List";
import PageHeader from "@/components/shared/PageHeader";

export const metadata = {
  title: "Summaries",
};
async function getSummaries() {
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/summaries-list/`;
  const data = await fetch(url).then((r) => r.json());

  return data;
}
async function Page() {
  const data = await getSummaries();
  const summaries = data;

  return (
    <div>
      <PageHeader
        title={"Summaries"}
        subTitle={`
Here you'll find all our summaries.
We work hard to make sure each page is accurate, so you can trust it!`}
      />

      <main className="grid gap-4">
        <section className=" bg-gray-100 rounded-lg px-4 py-8">
          <div className="grid  grid-cols-3 gap-6 my-4">
            <List href="summaries" list={summaries} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Page;
