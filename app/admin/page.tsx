"use client";
import Link from "next/link"
import RevenueForm from "../../components/components/RevenueForm";
import {
  AcademicCapIcon,
  UserGroupIcon,
  BuildingLibraryIcon,
  UserIcon,
  BookOpenIcon,
  ClipboardDocumentIcon,
  ChartBarIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline"

export default function AdminPage() {
  return (
     <div className="space-y-8">
      <h1 className="text-3xl font-bold text-blue-900">Admin Dashboard</h1>

 {/* Row 1: Lecturer, Faculty, Department/Faculty */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Academic Roles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-3">
            <UserGroupIcon className="h-8 w-8 text-blue-900" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Lecturers</h3>
              <p className="text-gray-700">Manage lecturer accounts and assigned readings.</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-3">
            <AcademicCapIcon className="h-8 w-8 text-blue-900" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Faculty</h3>
              <p className="text-gray-700">Faculty-level management and reporting.</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-3">
            <BuildingLibraryIcon className="h-8 w-8 text-blue-900" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Department/Faculty</h3>
              <p className="text-gray-700">Departmental accounts and shared resources.</p>
            </div>
          </div>
        </div>
      </section>

     
      {/* Row 2: Author, Bookshop, Press */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Publishing Roles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-3">
            <UserIcon className="h-8 w-8 text-blue-900" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Author</h3>
              <p className="text-gray-700">Upload manuscripts and track royalties.</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-3">
            <BookOpenIcon className="h-8 w-8 text-blue-900" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Bookshop</h3>
              <p className="text-gray-700">Manage discounts, markups, and sales reports.</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-3">
            <ClipboardDocumentIcon className="h-8 w-8 text-blue-900" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Press</h3>
              <p className="text-gray-700">Handle publishing metadata and distribution.</p>
            </div>
          </div>
        </div>
      </section>

       {/* Row 3: Reporting and Gallery Management */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Reports and Gallery Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-3">
            <ChartBarIcon className="h-8 w-8 text-blue-900" />
            <div>
              <h2 className="text-xl font-semibold mb-4">Reports</h2>
              <p className="text-gray-700">
                Generate reports for Bookshop, Authors, Press, Gallery Manager, Students, and Auditors.
              </p>
              <Link href="/report">
              Check Report →
              </Link>
              {/* Add table or chart here */}
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-3">
            <PhotoIcon className="h-8 w-8 text-blue-900" />
            <div>
              <h2 className="text-xl font-semibold mb-4">Gallery Management</h2>
              <p className="text-gray-700">
                Upload, organize, and manage book assets for the university community.
              </p>
              <Link href="/gallerymanagement">
              Go to Gallery → </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Sharing Formula */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Financial Sharing Formula</h2>
        <RevenueForm />
      </section>

     
    </div>
  );
}
