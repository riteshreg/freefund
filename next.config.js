/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
        
  },
  images:{
    domains:['images.gofundme.com','dao578ztqooau.cloudfront.net','upload.wikimedia.org']
  }
}

module.exports = nextConfig
