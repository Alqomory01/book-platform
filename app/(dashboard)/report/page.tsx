"use client"
import {useState} from "react"
import { ChartBarIcon } from "@heroicons/react/24/outline";

type Role =
  | "Bookshop"
  | "Author"
  | "Press"
  | "GalleryManager"
  | "Student"
  | "Admin"
  | "Auditor";

export default function ReportsPage(){

    const [role, setRole] = useState<Role>("Admin");

  const reports:Record<Role, string>  =  {
    Bookshop: "Sales, discounts, markups, inventory turnover.",
    Author: "Royalties, manuscript uploads, readership stats.",
    Press: "Publishing metadata, distribution reach.",
    GalleryManager: "Uploaded assets, usage frequency.",
    Student: "Books accessed, downloads, study materials.",
    Admin: "System-wide overview, financials, compliance.",
    Auditor: "Logs, access trails, financial distribution checks."
  };

    return(
        <>
         <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold text-blue-900 flex items-center gap-2">
        <ChartBarIcon className="h-8 w-8 text-blue-900" />
        Reporting Interface
      </h1>

      {/* Role Selector */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <label className="block mb-2 font-semibold">Select Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as Role)}
          className="border p-2 rounded-md w-full"
        >
          {Object.keys(reports).map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      {/* Report Content */}
      <div className="bg-gray-100 shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">{role} Reports</h2>
        <p className="text-gray-700">{reports[role]}</p>

        {/* Placeholder for charts/tables */}
        <div className="mt-4 bg-white p-4 rounded-md shadow">
          <p className="text-gray-500">[Charts and tables for {role} go here]</p>
        </div>
      </div>
    </div>
         </>
    )
}