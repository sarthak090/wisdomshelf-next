import Link from "next/link";

export default function List({ list,href }) {
  function removeBooksAndAfter(text) {
    // Use a regular expression to match 'Books' and everything that follows it
    return text.replace(/Books.*$/i, "");
  }
  return (
    <>
      {list.map((series: any,i) => (
        <Link
         key={i}
          className="text-blue-500 hover:underline"
          href={`/${href}/${series.slug}`}
        >
         <span dangerouslySetInnerHTML={{__html:removeBooksAndAfter(series.name)}}/>  
        </Link>
      ))}
    </>
  );
}
