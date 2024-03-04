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
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "*",
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "Origin, X-Requested-With, Content-Type, Accept",
                    },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET, POST, PUT, DELETE, OPTIONS",
                    }
                ],
            },
        ];
    },    
};

export default nextConfig;
