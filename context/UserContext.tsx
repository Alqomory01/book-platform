// context/UserContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type Role = "STUDENT" | "AUTHOR" | "PRESS" | "BOOKSHOP" | "ADMIN";

interface User {
  email: string;
  name: string;
  role: Role;
  image?: string;
  bio?: string;
}

interface UserContextType {
  user: User | null;
  register: (email: string, password: string, role: Role) => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (updated: User) => void; 
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const register = async (email: string, password: string, role: Role): Promise<boolean> => {
    // Save user info (in real app, call API)
    setUser({ email, name: email.split("@")[0], role, image: "/profilegirl.png" });
    return true;
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    // In real app, validate credentials against backend
    // For now, just restore user with role based on email prefix or stored data
    if (email.startsWith("author")) setUser({ email, name: email.split("@")[0], role: "AUTHOR" });
    else if (email.startsWith("press")) setUser({ email, name: email.split("@")[0], role: "PRESS" });
    else if (email.startsWith("shop")) setUser({ email, name: email.split("@")[0], role: "BOOKSHOP" });
    else if (email.startsWith("admin")) setUser({ email, name: email.split("@")[0], role: "ADMIN" });
    else setUser({ email, name: email.split("@")[0], role: "STUDENT" });

    return true;
  };

  const logout = () => setUser(null);

  const updateUser = (updated: User) => {
  setUser(updated);
};

  return (
    <UserContext.Provider value={{ user, register, login, logout, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
