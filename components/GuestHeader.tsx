"use client"
import Image from "next/image"
import Link from "next/link"
import { IoSearch } from "react-icons/io5";
import { useState,useEffect } from "react";
import { useSession,signOut } from "next-auth/react";
import { FiShoppingCart } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";

export default function GuestHeader (){
     const [isSticky, setIsSticky] = useState(false);
     const [menuOpen, setMenuOpen] = useState(false);
     const { data: session } = useSession();
  const user = session?.user;

     
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
            <h1 className="text-xl font-bold text-blue-600">Avastech</h1>
            <p className="text-xs text-gray-500">Book Store Website</p>
          </div>
        </div>

        {/* Search (hidden on mobile) */}
        <div className="hidden md:flex items-center bg-gray-700 rounded overflow-hidden w-full max-w-xl shadow">
          <select className="bg-gray-300 text-gray-700 px-3 py-2 text-sm outline-none border-r">
            <option>Category</option>
            <option>Fiction</option>
            <option>Non-Fiction</option>
            <option>Science</option>
          </select>
          <input
            type="text"
            placeholder="Search Books Here"
            className="flex-1 px-3 py-2 text-sm text-white outline-none border-none"
          />
          <button className="px-3 flex items-center justify-center">
            <IoSearch className="text-white" />
          </button>
        </div>

        {/* Right side */}
        {user ? (
          <div className="flex items-center gap-4">
            <button className="relative">
              <GrFavorite />
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1">
                21
              </span>
            </button>
            <button className="relative">
              <FiShoppingCart />
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1">
                5
              </span>
            </button>
            <div className="hidden sm:flex items-center gap-2">
              <Image
                src={user.image || "/profilegirl.png"}
                width={32}
                height={32}
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
              <div className="hidden md:block">
                <p className="text-sm font-semibold">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="px-3 py-2 bg-red-500 text-white rounded text-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex space-x-2">
            <Link
              href="/login"
              className="px-3 py-2 border rounded-xl border-blue text-blue-600 text-sm"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-3 py-2 border rounded-xl border-blue text-white bg-blue-600 text-sm"
            >
              Get Started
            </Link>
          </div>
        )}

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
          <Link href="/pages">Pages</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
        <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded">
          Buy Books
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-2">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/pages">Pages</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>
          <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
            Buy Books
          </button>
        </div>
      )}
    </div>
)
}