/** @type {import('next').NextConfig} */
const nextConfig = {
  // تكوين الصور
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    path: "/_next/image",
    loader: "default",
  },
};

export default nextConfig;
