/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Incluir configurações específicas para o Next.js 13
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig; 