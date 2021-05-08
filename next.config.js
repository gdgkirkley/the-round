module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('@prisma/client');
    }

    return config;
  },
  target: 'serverless',
};
