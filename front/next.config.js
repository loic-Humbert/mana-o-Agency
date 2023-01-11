/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://localhost:3000/api',
        },
      ]
    },
};

module.exports = nextConfig
