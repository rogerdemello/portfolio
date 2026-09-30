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

// Project screenshots rarely change: let browsers and the CDN reuse them (and refresh in the background).
nextConfig.headers = async () => [
  {
    source: "/projects/:path*",
    headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
  },
];

export default nextConfig;
