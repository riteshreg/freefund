/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // don't do anything for client-side code
        return config;
      }
  
      // enable __dirname for server-side code
      config.node = {
        __dirname: true,
      };
  
      return config;
    },

    
  },
}

module.exports = nextConfig
