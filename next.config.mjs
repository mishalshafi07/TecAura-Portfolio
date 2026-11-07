/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Prevent Windows dev/build chunk cache collisions (Cannot find module './XXX.js')
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
