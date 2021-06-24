module.exports = {
  chainWebpack: (config) => {
    config.externals({
      "@demo/store": "@demo/store",
    });
  },
};
