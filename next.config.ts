import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["flowbite.s3.amazonaws.com", "images.unsplash.com"], // ✅ allow this image host
  },
};

export default nextConfig;
