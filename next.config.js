/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["assets.acme.com"],
//   },
//   experimental: {
//     images: {
//       unoptimized: true,
//     },
//   },
// };

module.exports = nextConfig;
