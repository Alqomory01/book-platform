"use client";

import DashboardButtons from "../../components/DashboardButtons";
import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <main className="flex items-center justify-center min-h-screen px-4">
        <p className="text-gray-600 text-sm sm:text-base">Loading...</p>
      </main>
    );
  }

  if (status === "unauthenticated") {
    return (
      <main className="min-h-screen px-4 sm:px-8 py-10 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Guest Dashboard</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Please login or register to access your dashboard.
        </p>
      </main>
    );
  }

  const user = session?.user;

  return (
    <main className="min-h-screen px-4 sm:px-8 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        {user?.name} Dashboard
      </h1>
      <div className="mt-6">
        <DashboardButtons />
      </div>
    </main>
  );
}
