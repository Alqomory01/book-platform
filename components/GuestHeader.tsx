"use client"
import Image from "next/image"
import Link from "next/link"
import { IoSearch } from "react-icons/io5";
import { useState,useEffect } from "react";


export default function GuestHeader (){
     const [isSticky, setIsSticky] = useState(false);
     const [menuOpen, setMenuOpen] = useState(false);
    

     
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    
 window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
return(
    <div>
      {/* Top header */}
      <header className="bg-white shadow-md px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/AvasTech Logo.png"
            alt="Avastechlogo"
            width={110}
            height={55}
            className="w-auto h-10 sm:h-12"
          />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-blue-600">Top Reader</h1>
            <p className="text-xs text-gray-500">Book Store Website</p>
          </div>
        </div>

        {/* Search (hidden on mobile) */}
        <div className="hidden md:flex items-center  ml-3 rounded-xl overflow-hidden w-full max-w-xl h-12 shadow">
          <select className="bg-gray-400 text-gray-200  px-3 w-[30%] h-12    text-sm outline-none  border-none">
            <option>Category</option>
            <option>Fiction</option>
            <option>Non-Fiction</option>
            <option>Science</option>
          </select>
          <div className="bg-gray-700 w-[70%] flex h-12 justify-between items-center ">
          <input
            type="text"
            placeholder="Search Books Here"
            className="flex-1 px-2  text-sm text-white outline-none border-none"
          />
          <button className="px-3 flex items-center justify-center">
            <IoSearch className="text-white w-6 h-6" />
          </button>
          </div>
        </div>

       {/* Guest actions */}
        <div className="flex space-x-2">
          <Link href="/login" className="px-4 py-3 border rounded border-blue text-blue-600 text-sm">
            Login
          </Link>
          <Link href="/register" className="px-4 py-3 border rounded border-blue text-white bg-blue-900 text-sm">
            Get Started
          </Link>
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
        className={`w-full z-50 bg-white transition-all shadow-md px-4 sm:px-10 py-4 flex items-center justify-between duration-300 ${
          isSticky ? "fixed top-0 left-0 right-0 shadow-md" : ""
        }`}
      >
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/books">Books</Link>
          <Link href="/authors">Authors</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
        <button className="hidden md:block bg-blue-900 text-white px-4 py-2 rounded">
          Buy Books
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className={`md:hidden bg-white shadow-md px-4 py-4 space-y-2 transform transition-all duration-300 ease-in-out ${
    menuOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4 overflow-hidden"
  }`}>    <nav className="flex flex-col space-y-2">
           <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/books">Books</Link>
          <Link href="/authors">Authors</Link>
          <Link href="/contact">Contact Us</Link>
          </nav>
          <button className="bg-blue-900 text-white px-4 py-2 rounded w-full">
            Buy Books
          </button>
        </div>
      )}
    </div>
)
}