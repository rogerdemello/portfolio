/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
        pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "github-readme-streak-stats.herokuapp.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
