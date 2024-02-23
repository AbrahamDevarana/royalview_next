/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    optimizeFonts: true,
    images: {
        minimumCacheTTL: 2592000,
        // domains: ["picsum.photos", "www.royalview.com.mx"],
        remotePatterns: [
            {
                hostname: "www.royalview.com.mx",
                protocol: "https",
            },
            {
                hostname: "picsum.photos",
                protocol: "https",
            }
        ]
    },
    headers: function () {
        return [
            {
                source: "/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },
    compress: true,
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
