/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pabloeguilaz.dev",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
