'use client'
import Image from "next/image";

function SeriesHeader({ series }) {
  return (
    <div className="grid my-8 grid-cols-1 gap-6  lg:grid-cols-12">
        <div className="flex justify-center w-full  col-span-3  ">
        <div className="series_thumbnails flex justify-center">
          {series.books.slice(0, 3).map((b) => (
            <Image
              src={b.thumbnail.replace("-150x150", "")}
              className="rounded-lg"
              objectFit="contain"
              alt={b.name}
              width={200}
              height={380}
            />
          ))}
        </div>
      </div>
      <div className=" lg:col-span-9">
         

        <div className=" mt-8">
         
            <span className="font-bold">Description</span>
            <p className="my-8 text-[19px] text-gray-500"> 
            <span dangerouslySetInnerHTML={{__html:series.description}}/>
            </p>
            <p className="italic text-sm text-gray-500">P.S.: As an Amazon Associate, we earn money from purchases made through links in this page. But the summaries are totally free!

</p>
          </div>
      </div>
    </div>
  );
}

export default SeriesHeader;
