"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signIn("dummy", {
      redirect: false,
      email,
      password,
    });

    if (!result?.error) {
      router.push("/dashboard");
    } else {
      console.error(result.error);
    }
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
            Welcome Back
          </h2>
          <p className="text-base sm:text-lg mb-6">
            Sign in to continue exploring and managing your account.
          </p>
          <p className="text-xs sm:text-sm opacity-80">
            New here?{" "}
            <a href="/register" className="underline">
              Create Account
            </a>
          </p>
        </div>

        {/* Right Side (Form) */}
        <div className="flex-1 p-8 sm:p-10">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center lg:text-left">
            Login
          </h3>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="border px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="border px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base"
            />
            <button
              type="submit"
              className="
                bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded
                font-semibold hover:bg-blue-700 text-sm sm:text-base
              "
            >
              Sign In
            </button>
          </form>
          <p className="mt-4 text-xs sm:text-sm text-gray-500 text-center lg:text-left">
            Need help?{" "}
            <a href="/contact" className="underline">
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
