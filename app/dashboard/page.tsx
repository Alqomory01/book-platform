"use client";

import DashboardButtons from "../../components/DashboardButtons";
import { useUser } from "../../context/UserContext";

export default function DashboardPage() {
  const { user } = useUser();

  if (!user) {
    return (
      <main className="min-h-screen px-4 sm:px-8 py-10 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Guest Dashboard</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Please login or register to access your dashboard.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-4 sm:px-8 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        {user.name} Dashboard
      </h1>
      <div className="mt-6">
        <DashboardButtons />
      </div>
    </main>
  );
}
