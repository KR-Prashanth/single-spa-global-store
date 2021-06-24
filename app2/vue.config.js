module.exports = {
  configureWebpack: {
    externals: ["vue", /^@demo\/.+/],
  },
  css: {
    sourceMap: true,
  },
  productionSourceMap: false,
};
