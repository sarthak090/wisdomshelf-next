import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
    const nav = [
        {
          label: "Books",
          href: "/lists",
        },
        {
          label: "Series",
          href: "/series",
        },
        {
          label: "Summaries",
          href: "/summaries",
        },
        {
          label: "Gifts",
          href: "/gifts",
        },
      ];
  return (
    <footer className="bg-gray-100 px-12 py-4 mt-16">
      <div className="grid grid-cols-2 mt-10">
        <div>
          <div className="flex items-center gap-2">
            <Link href={"/"}>
              <Image
                src={"/img/logo.png"}
                width={100}
                height={80}
                alt="Wisdom Shelf Logo"
              />
            </Link>
            <Link href={"/"}>
              <div className="grid font-bold">
                WISDOM
                <span className="font-normal">SHELF</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex font-semibold gap-8">
          {nav.map((n) => (
            <Link key={Math.random()} href={n.href}>
              {n.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 border-t-[1px] mt-8 py-4">
      © 2024 Wisdom Shelf All rights reserved.
      </div>
       
    </footer>
  );
}

export default Footer;
