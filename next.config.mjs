/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  headers: async () => [
    {
      source: '/videos/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=3600, must-revalidate',
        },
        {
          key: 'Content-Type',
          value: 'video/mp4',
        },
      ],
    },
  ],
  staticPageGenerationTimeout: 1000,
}

export default nextConfig
