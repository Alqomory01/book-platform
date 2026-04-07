"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  HomeIcon,
  BookOpenIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ClipboardDocumentIcon,
  BuildingLibraryIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const links = [
  { href: "/admin", label: "Admin", icon: HomeIcon },
  { href: "/bookshop", label: "Bookshop", icon: BookOpenIcon },
  { href: "/press", label: "Press", icon:ClipboardDocumentIcon },
  { href: "/author", label: "Author", icon: UserIcon },
  { href: "/student", label: "Student", icon: AcademicCapIcon },
  { href: "/faculty", label: "Dept/Faculty", icon: BuildingLibraryIcon },
  { href: "/lecturer", label: "Lecturers", icon: UserGroupIcon },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true); // expanded by default

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="md:hidden p-2 bg-blue-900 text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close Menu" : "Open Menu"}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 min-h-screen bg-blue-900 text-white flex flex-col transition-all duration-300 
        ${open ? "w-64" : "w-20"}`}
      >
        {/* Logo / Title */}
        <div className="p-4 text-xl font-bold border-b border-blue-700">
          {open ? "University Portal" : "UP"}
        </div>

        <button
          className="hidden md:block p-2 bg-blue-800 hover:bg-blue-700"
          onClick={() => setOpen(!open)}
        >
          {open ? "< Collapse" : "> Expand"}
        </button>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
  {links.map(({ href, label, icon: Icon }) => (
    <li key={href}>
      <Link
        href={href}
        aria-label={label}
        className={`flex items-center gap-3 px-3 py-2 rounded ${
          pathname.startsWith(href)
            ? "bg-blue-700 font-semibold"
            : "hover:bg-blue-700"
        }`}
      >
        <Icon className="h-6 w-6" />
        {open && <span>{label}</span>}
      </Link>
    </li>
  ))}
</ul>
        </nav>

        {/* Collapse/Expand button (desktop only) */}
        
      </aside>
    </>
  );
}
