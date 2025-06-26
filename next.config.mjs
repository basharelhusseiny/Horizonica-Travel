/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['horizonica-travel.com', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: process.env.NODE_ENV === 'development', // تحسين الصور في الإنتاج فقط
  },
  // لا تستخدم output: 'export' إذا كنت تريد استخدام خادم Next.js على Vercel
  // output: 'export', // قم بإزالة هذا السطر أو تعليقه
};

export default nextConfig;


