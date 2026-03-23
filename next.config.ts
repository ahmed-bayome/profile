import type { NextConfig } from 'next';

// next.config.ts
const nextConfig: NextConfig = {
  // remove the eslint block entirely
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
    ],
  },
};

export default nextConfig;