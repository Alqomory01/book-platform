"use client";

export default function GuestFooter() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-100 text-center text-sm text-gray-600 py-6 mt-10">
      <p>&copy; {new Date().getFullYear()} AvasTech. All rights reserved.</p>

      {/* Links */}
      <div
        className="
          mt-3
          flex flex-col items-center gap-2
          sm:flex-row sm:justify-center sm:gap-6
        "
      >
        <a href="/privacy" className="hover:text-blue-600 transition-colors">
          Privacy Policy
        </a>
        <a href="/terms" className="hover:text-blue-600 transition-colors">
          Terms of Service
        </a>
        <a href="/contact" className="hover:text-blue-600 transition-colors">
          Contact Us
        </a>
      </div>
    </footer>
  );
}
