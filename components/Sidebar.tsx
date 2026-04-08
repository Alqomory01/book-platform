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
  const [open, setOpen] = useState(false); //closed by default on mobile

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="md:hidden p-2 bg-blue-900 text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close Menu" : "Open Menu"}
      </button>

       {/* Overlay for mobile when sidebar is open */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full bg-blue-900 text-white flex flex-col transition-transform duration-300 z-50
        ${open ? "translate-x-0 w-64" : "-translate-x-full md:w-64"}`}
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
        onClick={() => setOpen(false)}
      >
        <Icon className="h-6 w-6" />
         <span className="hidden md:inline">{label}</span>
        {open && <span className="md:hidden">{label}</span>}
      </Link>
    </li>
  ))}
</ul>
        </nav>

     
        
      </aside>
    </>
  );
}
