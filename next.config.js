/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};

module.exports = {
  future: {
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4.
    // Looks like backward compatibility approach.
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    };

    return config;
  },
};

module.exports = {
  basePath: "/apps/nextjs",
};


module.exports = {
  httpAgentOptions: {
    keepAlive: false,
  },
};
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})

module.exports = {
  plugins: [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
    [
      "@fullhuman/postcss-purgecss",
      {
        content: [
          "./pages/**/*.{js,jsx,ts,tsx}",
          "./components/**/*.{js,jsx,ts,tsx}",
        ],
        safelist: ["html", "body"],
      },
    ],
  ],
};

module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      "i.ytimg.com",
      "upload.wikimedia.org",
      "phuongmychi.vn",
      "via.placeholder.com",
      "i.imgur.com",
      "static.accesstrade.vn",
      "cf.shopee.vn",
      "shopee.vn",
      "slatic.net",
      "nguyenkimmall.com"
    ],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
    remotePatterns: [],
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

  },
};
