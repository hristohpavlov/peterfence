/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  env: {
    MONGO_URI: "mongodb+srv://admin:admin@cluster0.9u6f5kl.mongodb.net/nextAuthDB?retryWrites=true&w=majority",
    SERVER_URL: "https://peterfence-backend.herokuapp.com",
  },
  reactStrictMode: true,
  target: "serverless",
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig;

const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({})