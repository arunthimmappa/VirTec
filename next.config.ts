import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "virtec.us",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "uploads-ssl.webflow.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
