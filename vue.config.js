module.exports = {
  // transpileDependencies: ["vuetify"],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        mac: {
          icon: "src/assets/app.png",
        },
        win: {
          icon: "src/assets/app.png",
        },
      },
    },
  },
};
