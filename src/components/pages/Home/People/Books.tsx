"use client";
import React, { useState } from "react";
import Recommendation from "./Recommendation";
import Written from "./Written";

export default function Books(props) {
  const { recommendations, written, people } = props;
  const [showWritten, setShowWritten] = useState(false);

  return (
    <div>
      <section className="flex gap-4 my-8 font-bold justify-center">
        <div className={`cursor-pointer ${!showWritten?'border-b-[3px] border-blue-400':''}`} onClick={() => setShowWritten(false)}>Recommendation</div>
        <div className={`cursor-pointer ${showWritten?'border-b-[3px] border-blue-400':''}`} onClick={() => setShowWritten(true)}>Written</div>
      </section>
      {showWritten ? (
        <Written written={written} people={people} />
      ) : (
        <Recommendation recommendations={recommendations} />
      )}
    </div>
  );
}
