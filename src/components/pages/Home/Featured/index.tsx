 
import Item from './Item'
import React from "react";

export default function Featured(props) {
  const {
    series: { series },
  } = props;
   return (
    <div>
        <p className="text-3xl text-center font-bold text-blue-600">Popular Series</p>
       {series.slice(0, 3).map((s) => {
        <div className="">
          {s.books.slice(0, 3).map((book) => (
            <Item key={Math.random()} book={book}/>
             
          ))}
        </div>;
      })}
    </div>
  );
}
