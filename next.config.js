/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const isTest = process.env.NODE_ENV === 'test'

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
})

const nextConfig = withPWA({
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: !isTest,
      displayName: !isTest
    }
  }
})

module.exports = nextConfig
