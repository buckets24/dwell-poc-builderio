import BuilderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()(BuilderDevTools()({
  images: {
    remotePatterns: [
      {
        hostname: "randomuser.me"
      },
      {
        hostname: "cdn.builder.io"
      }
    ]
  }
}));

export default nextConfig;
