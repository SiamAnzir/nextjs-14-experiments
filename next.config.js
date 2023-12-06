/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d318e0jv36oqd2.cloudfront.net",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
};

module.exports = nextConfig;
