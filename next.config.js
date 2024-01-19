/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
    images: {
        minimumCacheTTL: 2592000,
        domains: ['picsum.photos'],
    },
    headers: function () {
        return [
          {
            source: '/:path*',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable',
              },
            ],
          },
        ]
	},
	compress: true,
}

module.exports = nextConfig
