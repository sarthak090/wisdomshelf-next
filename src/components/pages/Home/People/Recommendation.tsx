import Image from "next/image";
import React from "react";

export default function Recommendation(props) {
  const { recommendations } = props;
  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        {recommendations.length > 0 ? (
          recommendations.map((recommendation: any) => (
            <div
              key={recommendation.book?.id}
              className="flex items-center gap-2 justify-start border py-4 px-3 rounded-md"
            >
              <div className="flex-shrink-0">
                {recommendation.book?.thumbnail && (
                  <Image
                    src={recommendation.book?.thumbnail}
                    alt={recommendation.book?.title || "Book Image"}
                    className="rounded-md"
                    width={120}
                    height={100}
                  />
                )}
              </div>
              <div>
                <p className="text-xl font-semibold mb-2">
                  {recommendation.book?.title || "Untitled"}
                </p>
                <p className="text-gray-500">
                  {recommendation.book?.subtitle || "No subtitle"}
                </p>
                <p className="text-xs text-gray-500 mb-2">
                  {recommendation.book?.author || "Unknown author"}
                </p>
                <div className="text-md">
                  <span className="font-bold">Source:</span>
                  <span className="italic">
                    {recommendation.source || "Unknown"}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No recommendations available.
          </p>
        )}
      </div>
    </div>
  );
}
