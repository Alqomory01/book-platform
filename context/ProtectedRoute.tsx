"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import keycloak from "../lib/keycloak";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

useEffect(() => {
    if (!keycloak.authenticated) {
      router.push("/login");
    }
  }, []);


  if (!authenticated) {
    return <div>Checking authentication...</div>;
  }

  return <>{children}</>;
}
