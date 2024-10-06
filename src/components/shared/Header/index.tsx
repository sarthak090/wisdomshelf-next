import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
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
    <header>
      <nav
        className="flex justify-between items-center px-12 py-6 shadow-xl
"
      >
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <Image
              src={"/img/logo.png"}
              width={100}
              height={80}
              alt="Wisdom Shelf Logo"
            />
          </Link>
          <Link href={'/'}>
          <div className="grid font-bold">
            WISDOM
            <span className="font-normal">SHELF</span>
          </div>
          </Link>

        </div>
        <div className="flex font-semibold gap-8">
          {nav.map((n) => (
            <Link key={Math.random()} href={n.href}>
              {n.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
