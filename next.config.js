module.exports = {
  reactStrictMode: true,
  webpack: (config, {dev}) => {
    config.module.rules.push({
      test: /\.test.js$/,
      loader: "ignore-loader",
    });
    return config;
  },
};
