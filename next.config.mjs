import BuilderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()(BuilderDevTools()({
  images: {
    remotePatterns: [
      {
        hostname: "randomuser.me"
      }
    ]
  }
}));

export default nextConfig;
