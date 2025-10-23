// next.config.js
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: false,
});

module.exports = withPWA({
  reactStrictMode: true,
});
