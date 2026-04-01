"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Role = "GUEST" | "STUDENT" | "AUTHOR" | "PRESS" | "BOOKSHOP" | "ADMIN";

interface User {
  email: string;
  name: string;
  role: Role;
}

interface UserContextType {
  user: User | null;
  register: (email: string, password: string, role: Role) => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const register = async (email: string, password: string, role: Role): Promise<boolean> => {
    // Dummy registration: just set user
    setUser({ email, name: email.split("@")[0], role });
    return true;
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    // Dummy login: assign role based on email prefix
    if (email.startsWith("author")) setUser({ email, name: "Author User", role: "AUTHOR" });
    else if (email.startsWith("press")) setUser({ email, name: "Press User", role: "PRESS" });
    else if (email.startsWith("shop")) setUser({ email, name: "Bookshop User", role: "BOOKSHOP" });
    else if (email.startsWith("admin")) setUser({ email, name: "Admin User", role: "ADMIN" });
    else setUser({ email, name: "Student User", role: "STUDENT" });

    return true; // ✅ now returns a boolean
  };

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
