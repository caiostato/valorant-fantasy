import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_API_URL: process.env.NEXT_API_URL,
  },
  images: {
    domains: ["owcdn.net"],
  },
};

export default nextConfig;
