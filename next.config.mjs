import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

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

  // 🔹 redirect root / → /en (default locale)
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en', // ضبطي على اللغة اللي عايزاها default
        permanent: true,
      },
    ];
  },
};

// ✅ لازم نصدّره بعد دمجه مع next-intl
export default withNextIntl(nextConfig);
