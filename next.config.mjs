/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        minimumCacheTTL: 2592000,
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
};

export default nextConfig;
