/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    VERIFY_TOKEN: 'verify_token',
    PAGE_ACCESS_TOKEN: 'page_access_token',
  },
}

module.exports = nextConfig
