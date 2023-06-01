const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "ALLOW-FROM http://*.metabase.com",
  },
  {
    key: "Content-Security-Policy",
    value:
      "frame-ancestors 'self' http://*.metabase.com http://metabase.com http://*.metabaseapp.com http://metabaseapp.com",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "no-referrer-when-downgrade",
  },
];

module.exports = withBundleAnalyzer({
  experimental: {
    // styledComponents: true,
    externalDir: true,
  },
  outputFileTracing: false,
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: true,
  env: {
    ENV: process.env.ENV,

    METABASE_APP_ID: process.env.METABASE_APP_ID,
    METABASE_APP_DOMAIN: process.env.METABASE_APP_DOMAIN,
    METABASE_APP_PORT: process.env.METABASE_APP_PORT,

    METABASE_JWT_SHARED_SECRET: process.env.METABASE_JWT_SHARED_SECRET,
  },
  async headers() {
    return [
      {
        // Apply headers to all routes
        source: "/(.*)?",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    domains: ["localhost:3003", "*.metabase.com"],
  },
});
