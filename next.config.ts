import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * `next dev` e `next build` gravam no mesmo `.next`. Isolar o build:
   *   NEXT_DIST_DIR=.next-build npm run build && NEXT_DIST_DIR=.next-build npm start
   */
  distDir: process.env.NEXT_DIST_DIR || ".next",
  turbopack: {
    root: __dirname,
  },
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    minimumCacheTTL: 2592000,
  },
  async headers() {
    return [
      {
        source: "/:dir(cases|clients|brand|team)/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
