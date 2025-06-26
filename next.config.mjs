/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // unoptimized: process.env.NODE_ENV === 'development', // تحسين الصور في الإنتاج فقط
  },
};

export default nextConfig;


