'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // For toggle icons

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <nav className="flex justify-between items-center px-6 py-4 shadow-xl">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/img/logo.png"
              width={100}
              height={80}
              alt="Wisdom Shelf Logo"
            />
          </Link>
          <Link href="/">
            <div className="grid font-bold">
              WISDOM
              <span className="font-normal">SHELF</span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex font-semibold gap-8">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />} {/* Toggle icon */}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-6">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="block mb-4 text-lg">
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
