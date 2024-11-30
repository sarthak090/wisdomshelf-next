"use client";
import { useState } from "react";
import Peoples from "@/seed/peoples.json";
import Link from "next/link";
import { FaBookOpen } from "react-icons/fa";
import Image from "next/image";
export default function PeopleList() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter the topRecommenders based on the selected category
  const filteredRecommenders = selectedCategory
    ? Peoples.data.topRecommenders.filter((people) =>
        people.category.includes(selectedCategory)
      )
    : Peoples.data.topRecommenders;

  // Function to handle category selection
  const handleCategorySelection = (cat: any) => {
    if (cat === "all") {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(cat);
    }
  };

  return (
    <>
      <main className="grid grid-cols-12 gap-4">
        <aside className="border rounded-lg px-4 py-4 max-h-min col-span-3">
          <div
            className={`my-1 cursor-pointer ${
              selectedCategory === null ? "font-bold" : ""
            }`}
            onClick={() => handleCategorySelection("all")}
          >
            All
          </div>
          {Peoples.data.recommenderCategories.map((cat) => (
            <div
              key={cat}
              className={`my-1 cursor-pointer ${
                selectedCategory === cat ? "font-bold" : ""
              }`}
              onClick={() => handleCategorySelection(cat)}
            >
              {cat}
            </div>
          ))}
        </aside>
        <section className="col-span-9 grid grid-cols-4 gap-4">
          {filteredRecommenders.map((people) => (
            <Link href={`/peoples/` + people.slug}>
              <div
                className=" grid items-center justify-center"
                key={people.name}
              >
                {people.imageUrl300 && (
                  <Image
                    className="people-logo rounded-full"
                    width={130}
                    height={130}
                    alt={`${people.name} profile`}
                    src={people.imageUrl300}
                  />
                )}

                <div className="flex flex-col align-middle items-center justify-center">
                  <div className="font-bold">
                    <Link className="" href={`/peoples/` + people.slug}>
                      {people.name}
                    </Link>
                  </div>
                  <div className="flex text-sm gap-2 items-center">
                    {" "}
                    <FaBookOpen />
                    {people.booksCount} Books
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
