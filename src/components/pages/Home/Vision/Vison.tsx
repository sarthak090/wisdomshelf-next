import Link from "next/link";

export default function Vison() {
  return (
    <div className="my-8 px-8 lg:px-80 text-center">
      <div className="text-3xl lg:text-5xl text-primary font-bold mb-4">About Wisdom Shelf</div>
      <div className="font-semibold my-4">Welcome to our curated collection of wisdom!</div>

      <p className=" my-4 ">
        Dive into the minds of the world's most successful and influential
        people to discover the books that have shaped their thinking and moved
        them to greatness. But that's not all – immerse yourself in detailed
        articles exploring their daily routines and rituals, gaining insights
        into the habits that fuel their success.
      </p>
      <button className="my-3 px-8 py-3  bg-primary text-white rounded-lg">
        <Link href={'/'}>
        View More </Link></button>
    </div>
  );
}
