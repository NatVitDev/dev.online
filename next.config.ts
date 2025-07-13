import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

export default withNextIntl(nextConfig);
