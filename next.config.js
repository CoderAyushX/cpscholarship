/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Add a loader for .map files
      config.module.rules.push({
        test: /\.map$/,
        type: "javascript/auto",
        use: "raw-loader",
      });
    }

    return config;
  },
};

module.exports = nextConfig;
