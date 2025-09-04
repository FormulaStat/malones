/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    // add external domains if you use external images
    domains: []
  }
}

module.exports = nextConfig
