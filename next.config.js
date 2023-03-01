/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["firebasestorage.googleapis.com", "cdn.sanity.io"]
  }
  
}

module.exports = nextConfig
