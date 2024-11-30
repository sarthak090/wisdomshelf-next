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

  const nav2 = [
    {
      label: "Contact Us",
      href: "/contact-us",
    },
    {
      label: "About-us",
      href: "/series",
    },
    {
      label: "Meet the Team",
      href: "/meet-the-team",
    },
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      label: "Terms of Service",
      href: "/terms-of-service",
    },
    {
      label: "Cookie Policy/GDPR",
      href: "/cookie-policy-gdpr",
    },
  ];

  return (
    <footer className="bg-gray-100 px-6 py-6 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center mt-10 gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
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

        <div className="flex justify-center md:justify-start font-semibold gap-6 md:gap-8">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </div>

        <div className="flex justify-center md:justify-end">
          <form method="GET" action={"/search"}>
            <input
              type="text"
              placeholder="Search"
              className="p-2 border outline-none w-full md:w-auto"
            />
          </form>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 justify-center items-center border-t-[1px] border-b-[1px] py-3 text-gray-600 mt-4">
        {nav2.map((t) => (
          <Link key={t.href} href={t.href}>
            {t.label}
          </Link>
        ))}
      </div>

      <div className="flex justify-center text-center py-3 text-gray-600">
        <p className="max-w-2xl px-4">
          Wisdom Shelf is a participant in the Amazon Services LLC Associates
          Program, an affiliate advertising program designed to provide a means
          for sites to earn advertising fees by advertising and linking to
          Amazon.com.
        </p>
      </div>

      <div className="text-center text-sm text-gray-400 border-t-[1px] mt-8 py-4">
        © 2024 Wisdom Shelf. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
