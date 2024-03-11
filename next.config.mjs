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
            },
            {
                hostname: 'devarana-storage.sfo3.cdn.digitaloceanspaces.com',
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
            {
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ],
            }
        ];
    },    
};

export default nextConfig;
