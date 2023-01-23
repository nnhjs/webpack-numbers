const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack-numbers.js",
    globalObject: "this",
    library: {
      name: "webpackNumbers",
      type: "umd",
    },
  },
};
