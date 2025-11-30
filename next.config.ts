import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "images.unsplash.com", // Unsplash Images
    ],
  },
};

export default nextConfig;
