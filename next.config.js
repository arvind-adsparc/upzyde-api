/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://upzyde-new-gatsby.vercel.app/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
