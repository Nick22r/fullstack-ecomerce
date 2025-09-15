/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
    domains: [
      "res.cloudinary.com"
    ]
  },
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;