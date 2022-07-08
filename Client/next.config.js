/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
}); 

const nextConfig = {
  reactStrictMode: false,
  rootDir: 'src',
  images: {
    domains: ['external-content.duckduckgo.com'],
  },
}

module.exports = withBundleAnalyzer(nextConfig);
