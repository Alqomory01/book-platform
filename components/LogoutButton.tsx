"use client";

import keycloak from "../lib/keycloak";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    keycloak.logout({
      redirectUri: "http://localhost:3000/login", // where to go after logout
    });
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
    >
      Logout
    </button>
  );
}
