module.exports = {
  getTransformModulePath() {
    return require.resolve("react-native-stylus-transformer");
  },
  getSourceExts() {
    return ["js", "jsx", "styl"];
  }
};
