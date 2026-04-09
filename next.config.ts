import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  basePath: "/ebook/frontend",

  allowedDevOrigins: [
    "project.avastechng.ng",
  ],
};

export default nextConfig;
