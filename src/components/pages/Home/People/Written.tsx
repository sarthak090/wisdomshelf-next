import Image from "next/image";
import React from "react";

export default function Written(props) {
  const { written ,people } = props;
  return (
    < >
        <div className="grid grid-cols-2 gap-5">
          {written.length > 0 ? (
            written.map((w: any) => (
              
              <div key={w?.book_id} className="flex items-center gap-2 justify-start border py-4 px-3 rounded-md">
               
               
                <div className="flex-shrink-0">
                  {w?.thumbnail && (
                    <Image
                      src={w?.thumbnail}
                      alt={w?.title || "Book Image"}
                      className="rounded-md"
                      width={120}
                      height={100}
                    />
                  )}
                </div>
                <div>
                  <p className="text-xl font-semibold mb-2">
                    {w?.title || "Untitled"}
                  </p>
                  
                  
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No Books Written By {people.name}.</p>
          )}
        </div>
    </ >
  );
}
