/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.freetogame.com',

      },
    ],
  },
  reactStrictMode: true
}

module.exports = nextConfig
