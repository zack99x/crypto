module.exports = {
  configureWebpack: {
    devServer: {
      port: 8080,
      clientLogLevel: "info",
      // https://github.com/vuejs-templates/webpack/issues/378
      watchOptions: {
        poll: true,
      },
    },
  },
};
