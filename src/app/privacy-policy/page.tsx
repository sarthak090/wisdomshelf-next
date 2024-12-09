
import Link from "next/link";
async function getThePage() {
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/wp/v2/pages?slug=privacy-policy`;
  
  const data = await fetch(url).then((r) => r.json());
 
  return data[0];
}
export const metadata = {
  title: "Privacy Policy",
};
async function Page() {
  const data = await getThePage();
  const  page  = data;
 
  return (
    <div>
      <div className={"text-center text-4xl my-32 font-bold"}>{page.title.rendered}</div>

      <main className="grid gap-4 px-2 lg:px-12">
        <div dangerouslySetInnerHTML={{__html:page.content.rendered}}/>
      </main>
    </div>
  );
}

export default Page;
