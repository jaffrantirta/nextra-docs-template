const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ldlcuxfczildnousoivx.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "pqxdbiaibeqfgxoxlkpg.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "konsultanvisa.com",
        port: "",
        pathname: "/static/media/**",
      },
    ],
  },
});

module.exports = withNextra();
