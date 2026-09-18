/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Once photos are served from Supabase Storage, add that hostname here, e.g.:
    // remotePatterns: [{ protocol: 'https', hostname: '<project-ref>.supabase.co' }],
    remotePatterns: [],
  },
};

module.exports = nextConfig;
