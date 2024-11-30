 import BreadCrumb from "@/components/shared/BreadCrumb";
import List from "@/components/shared/List";
import PageHeader from "@/components/shared/PageHeader";
export const metadata = {
  title: "Series",
};
async function getSeries() {
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/books-api/v1/series-list/`;
  const data = await fetch(url).then((r) => r.json());
  return data;
}

async function Page() {
  const data = await getSeries();
  const seriesData = data.reverse();

  return (
    <div>
      <PageHeader
        title={`Series`}
        subTitle={`Explore our entire collection of series. We take great care to ensure each page is accurate, so you can rely on the information provided!
`}
      />

      <BreadCrumb loc={[{ label: "Series", href: "/series" }]} />

      <main className="grid grid-cols-12 gap-4">
        <section className="col-span-12 grid grid-cols-4 gap-4 bg-gray-100 rounded-lg px-4 py-8">
          <List href={"series"} list={seriesData} />
        </section>
      </main>
    </div>
  );
}

export default Page;
