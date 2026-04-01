"use client";

import { useUser } from "../context/UserContext";
import { canPerform } from "../lib/permissions";

export default function DashboardButtons() {
  const { user } = useUser();

  if (!user) {
    return (
      <p className="text-gray-600 text-center sm:text-left">
        Please login to see available actions.
      </p>
    );
  }

  const role = user.role;

  return (
    <div
      className="
        grid gap-3
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {canPerform(role, "browseBooks") && (
        <button className="btn w-full">Browse Books</button>
      )}
      {canPerform(role, "purchaseBook") && (
        <button className="btn w-full">Purchase Book</button>
      )}
      {canPerform(role, "reserveTitle") && (
        <button className="btn w-full">Reserve Title</button>
      )}
      {canPerform(role, "confirmTitle") && (
        <button className="btn w-full">Confirm Title</button>
      )}
      {canPerform(role, "modifyPrice") && (
        <button className="btn w-full">Modify Price</button>
      )}
      {canPerform(role, "publishBook") && (
        <button className="btn w-full">Publish Book</button>
      )}
      {canPerform(role, "viewReports") && (
        <button className="btn w-full">
          {role === "AUTHOR" ? "View Reports (Limited)" : "View Reports"}
        </button>
      )}
      {canPerform(role, "manageUsers") && (
        <button className="btn w-full">Manage Users</button>
      )}
    </div>
  );
}
