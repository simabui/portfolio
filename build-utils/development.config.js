const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "eval-cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png)$/i,
        use: ["url-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.pug" })],
  devServer: {
    stats: "errors-only",
  },
};
