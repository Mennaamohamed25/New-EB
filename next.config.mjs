/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1gnelo9urr3zj.cloudfront.net',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
