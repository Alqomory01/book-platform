"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import keycloak from "../lib/keycloak";

export type Role = "STUDENT" | "AUTHOR" | "PRESS" | "BOOKSHOP" | "ADMIN";

interface User {
  email?: string;
  name?: string;
  role?: Role;
  image?: string;
}

interface UserContextType {
  user: User | null;
  logout: () => void;
  updateUser: (updated: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    keycloak.init({ onLoad: "check-sso" }).then(auth => {
      if (auth) {
        const profile = keycloak.tokenParsed;
        const roles: string[] = profile?.realm_access?.roles || [];

        // Map Keycloak roles to your app roles
        let mappedRole: Role = "STUDENT";
        if (roles.includes("AUTHOR")) mappedRole = "AUTHOR";
        else if (roles.includes("PRESS")) mappedRole = "PRESS";
        else if (roles.includes("BOOKSHOP")) mappedRole = "BOOKSHOP";
        else if (roles.includes("ADMIN")) mappedRole = "ADMIN";

        setUser({
          email: profile?.email,
          name: profile?.name || profile?.preferred_username,
          role: mappedRole,
          image: "/profilegirl.png", // fallback
        });
      }
    });
  }, []);

  const logout = () => {
    keycloak.logout({ redirectUri: "http://localhost:3000/login" });
    setUser(null);
  };

  const updateUser = (updated: User) => setUser(updated);

  return (
    <UserContext.Provider value={{ user, logout, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
