/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
})

const nextConfig = withPWA({
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
})

module.exports = nextConfig
