/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  reactStrictMode: true,
  babel: {
    plugins: ['next/babel'],
  },
};

module.exports = nextConfig;
