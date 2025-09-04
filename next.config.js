/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Comentado para Vercel
  // distDir: 'out', // Comentado para Vercel
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
  },
};

module.exports = nextConfig;