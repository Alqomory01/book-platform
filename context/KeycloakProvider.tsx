"use client"; 

import { useEffect, useState } from "react";
import keycloak from "../lib/keycloak";

export default function KeycloakProvider({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    keycloak.init({ onLoad: "login-required" }).then(auth => {
      setAuthenticated(auth);
      if (auth) {
        console.log("User Token:", keycloak.token);
      }
    });
  }, []);

  if (!authenticated) {
    return <div>Loading authentication...</div>;
  }

  return <>{children}</>;
}
