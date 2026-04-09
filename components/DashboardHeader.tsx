"use client";

import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { useState, useEffect } from "react";


export default function DashboardHeader() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
   

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Top header */}
      <header className="bg-white shadow-md px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/AvasTech Logo.png"
            alt="Logo"
            width={110}
            height={55}
            className="w-auto h-10 sm:h-12"
          />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-blue-600">Top Reader</h1>
            <p className="text-xs text-gray-500">Dashboard</p>
          </div>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center ml-3 rounded-xl overflow-hidden w-full max-w-xl h-12 shadow">
          <select className="bg-gray-400 text-gray-200 px-3 w-[30%] h-12 text-sm outline-none border-none">
            <option>Category</option>
            <option>Fiction</option>
            <option>Non-Fiction</option>
            <option>Science</option>
          </select>
          <div className="bg-gray-700 w-[70%] flex h-12 justify-between items-center">
            <input
              type="text"
              placeholder="Search Books Here"
              className="flex-1 px-2 text-sm text-white outline-none border-none bg-transparent"
            />
            <button className="px-3 flex items-center justify-center">
              <IoSearch className="text-white w-7 h-7" />
            </button>
          </div>
        </div>

        {/* Right side (user actions) */}
        <div className="flex items-center gap-4">
          <button className="relative">
            <GrFavorite className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1">
              21
            </span>
          </button>
          <button className="relative">
            <FiShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1">
              5
            </span>
          </button>
          <div className="hidden sm:flex items-center gap-2">
            <Image
              src="/profilegirl.png"
              width={32}
              height={32}
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
            <div className="hidden md:block">
              <p className="text-sm font-semibold">adekunle</p>
              <p className="text-xs text-gray-500">adekunle@gmail.com</p>
            </div>
          </div>
          <button
        
            className="px-4 py-3 bg-red-500 text-white rounded text-sm"
          >
            Logout
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </header>

      {/* Navigation bar */}
      <div
        className={`w-full bg-white transition-all shadow-md px-4 sm:px-10 py-4 flex items-center justify-between duration-300 ${
          isSticky ? "sticky top-0 left-0 right-0 shadow-md" : ""
        }`}
      >
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link href="/admin">Admin</Link>
          <Link href="/bookshop">Bookshop</Link>
          <Link href="/author">Authors</Link>
          <Link href="/press">Press</Link>
          <Link href="/student">Students</Link>
          <Link href="/faculty">Faculty</Link>
          <Link href="/lecturer">Lecturers</Link>
        </nav>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-2">
          <nav className="flex flex-col space-y-2">
            <Link href="/admin">Admin</Link>
            <Link href="/bookshop">Bookshop</Link>
            <Link href="/author">Authors</Link>
            <Link href="/press">Press</Link>
            <Link href="/student">Students</Link>
            <Link href="/faculty">Faculty</Link>
            <Link href="/lecturer">Lecturers</Link>
          </nav>
        </div>
      )}
    </div>
  );
}
