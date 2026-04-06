"use client";

import { useState } from "react";
import { useUser } from "../../context/UserContext";
import type { Role } from "../../context/UserContext";
import { useRouter } from "next/navigation";
import keycloak from "../../lib/keycloak";

export default function RegisterPage() {
  // const { register } = useUser();
  // const router = useRouter();
  // const [form, setForm] = useState<{ name: string; email: string; password: string; role: Role }>({
  //   name: "",
  //   email: "",
  //   password: "",
  //   role: "STUDENT",
  // });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   register(form.email, form.password, form.role);
  //   router.push("/login");
  // };
   const handleRegister = () => {
    keycloak.register(
      {redirectUri : "http://localhost:3000/dashboard",}
    ); // Redirects to Keycloak's hosted registration page
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-400 px-4 sm:px-6 py-8">
      <div
        className="
          bg-white shadow-lg rounded-lg flex flex-col lg:flex-row
          w-full max-w-4xl overflow-hidden
        "
      >
        {/* Left Side (Promo) */}
        <div className="flex-1 p-8 sm:p-10 bg-gradient-to-b from-blue-900 to-blue-400 text-white text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Join BookVerse
          </h2>
          <p className="text-base sm:text-lg mb-6">
            Discover thousands of books, connect with authors, and explore new titles.
          </p>
          <p className="text-xs sm:text-sm opacity-80">
            Already have an account?{" "}
            <a href="/login" className="underline">
              Sign In
            </a>
          </p>
        </div>

        {/* Right Side (Form) */}
        <div className="flex-1 p-8 sm:p-10">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center lg:text-left">
            Create Account
          </h3>
          {/* <form onSubmit={handleSubmit} className="grid gap-4"> */}
             {/* <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base"
            />
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="border px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base"
            />
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value as Role })}
              className="border px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base"
            > */}
              <option value="STUDENT">Student</option>
              <option value="AUTHOR">Author</option>
              <option value="PRESS">Press</option>
              <option value="BOOKSHOP">Bookshop</option>
              <option value="ADMIN">Admin</option>
            {/* </select> */}
            <button
            onClick={handleRegister}
              className="
                bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded
                font-semibold hover:bg-blue-700 text-sm sm:text-base
              "
            >
              Get Started
            </button>
          {/* </form> */}
          <p className="mt-4 text-xs sm:text-sm text-gray-500 text-center lg:text-left">
            By clicking Create Account, you agree to our{" "}
            <a href="/privacy" className="underline">
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
