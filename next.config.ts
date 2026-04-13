import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "envisionds.com.au",
          },
        ],
        destination: "https://envisiondigitalsolutions.com.au/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
