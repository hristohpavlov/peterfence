/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  target: 'serverless',
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig;