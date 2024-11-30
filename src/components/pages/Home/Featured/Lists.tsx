import Image from "next/image";
import Item from "./Item";
import React from "react";
import Link from "next/link";

export default function ListsFeatured() {
  const imageSrcs = [
    "https://wisdomshelf.com/wp-content/uploads/2024/04/size120x180_Mans-Search-for-Meaning-Viktor-E.-Frankl.webp",
    "https://wisdomshelf.com/wp-content/uploads/2024/04/size120x180_Truth-Decay-An-Initial-Exploration-of-the-Diminishing-Role-of-Facts-and-Analysis-in-American-Public-Life.webp",
    "https://wisdomshelf.com/wp-content/uploads/2024/04/size120x180_Signs-The-Secret-Language-of-the-Universe.webp",
    "https://wisdomshelf.com/wp-content/uploads/2024/04/size120x180_Life-3.0-Being-Human-in-the-Age-of-Artificial-Intelligence.webp",
    "https://wisdomshelf.com/wp-content/uploads/2024/04/size120x180_The-Science-of-Can-and-Cant-A-Physicists-Journey-through-the-Land-of-Counterfactuals.webp",
    "https://wisdomshelf.com/wp-content/uploads/2024/04/size120x180_Tear-Me-Apart-A-Novel.webp",
    "https://wisdomshelf.com/wp-content/uploads/2024/04/size120x180_Masters-of-Scale-Surprising-Truths-from-the-Worlds-Most-Successful-Entrepreneurs.webp",
    "https://wisdomshelf.com/wp-content/uploads/2024/04/size120x180_High-Fidelity-.webp",
  ];

  const lists = [
    {
      label: "Best Star Wars Books        ",
      imgs: [
        "https://wisdomshelf.com/wp-content/uploads/2024/04/size120x180_Mans-Search-for-Meaning-Viktor-E.-Frankl.webp",
        "https://wisdomshelf.com/wp-content/uploads/2024/04/size120x180_Truth-Decay-An-Initial-Exploration-of-the-Diminishing-Role-of-Facts-and-Analysis-in-American-Public-Life.webp",
        "https://wisdomshelf.com/wp-content/uploads/2024/04/size120x180_Signs-The-Secret-Language-of-the-Universe.webp",
      ],
      href: "/lists/star-wars",
    },
    {
      label: "Best Books of All Time",
      imgs: [
        "https://wisdomshelf.com/wp-content/uploads/2024/04/size120x180_Life-3.0-Being-Human-in-the-Age-of-Artificial-Intelligence.webp",
        "https://wisdomshelf.com/wp-content/uploads/2024/04/size120x180_The-Science-of-Can-and-Cant-A-Physicists-Journey-through-the-Land-of-Counterfactuals.webp",
        "https://wisdomshelf.com/wp-content/uploads/2024/04/size120x180_Tear-Me-Apart-A-Novel.webp",
      ],
      href: "/lists/star-wars",
    },
    {
      label: "Best Mystery Books        ",
      imgs: [
        "https://wisdomshelf.com/wp-content/uploads/2024/04/size120x180_Masters-of-Scale-Surprising-Truths-from-the-Worlds-Most-Successful-Entrepreneurs.webp",
        "https://wisdomshelf.com/wp-content/uploads/2024/04/size120x180_High-Fidelity-.webp",
      ],
      href: "/lists/mystery",
    },
  ];

  return (
    <div className="px-32 text-center my-8">
      <p className="text-3xl lg:text-5xl text-center font-bold text-primary">
      Featured Lists

      </p>
      <div className="grid grid-cols-3 gap-4  my-8">
        {lists.map((s) => (
          <Link href={`/series/${s.href}`}>
            <div className="border py-8 text-center rounded-lg text-gray-600">
              <div className="mb-2">{s.label}</div>
              <div className="flex gap-2  justify-center ">
                {s.imgs.slice(0, 3).map((book) => (
                  <Image
                    src={book}
                    alt={s.label}
                    height={320}
                    className="h-40 rounded-lg object-cover"
                    width={100}
                  />
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link className="text-center font-semibold text-primary" href={"/lists"}>
        See all Lists
      </Link>
    </div>
  );
}
