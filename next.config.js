/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
        
  },
  images:{
    domains:['images.gofundme.com']
  }
}

module.exports = nextConfig
