/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  webpack: (config) => {
    // Handle canvas for Three.js
    if (config.externals) {
      if (typeof config.externals === 'function') {
        const originalExternal = config.externals;
        config.externals = function (...args) {
          const result = originalExternal(...args);
          return result === 'canvas' ? false : result;
        };
      } else if (Array.isArray(config.externals)) {
        config.externals = config.externals.filter(external => external !== 'canvas');
      }
    }
    
    // Add a resolver to handle the BatchedMesh import error
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'three-mesh-bvh': false, // Disable the three-mesh-bvh package
      },
    };
    
    return config;
  },
  // Add this to prevent issues with image optimization during build
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
