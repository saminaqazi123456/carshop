module.exports = {
  cache: {
    cacheId: "carshop",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "carshop",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
