/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode for better development experience
  reactStrictMode: true,
  
  // Enable the App Router (new in Next.js 13+)
  experimental: {
    appDir: true,
  },
  
  // Image optimization configuration
  images: {
    // Add any external image domains you need
    domains: [],
    // Enable unoptimized images for static export
    unoptimized: true,
  },
  
  // Output configuration for static export
  output: 'export',
  
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
  
  // Optional: Configure page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
}

module.exports = nextConfig
