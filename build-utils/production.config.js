const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CssUrlRelativePlugin = require("css-url-relative-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new ImageMinimizerPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      cache: true,
      minimizerOptions: {
        plugins: [
          ["mozjpeg", { quality: 50 }],
          ["pngquant", { qualty: [0.3, 0.5] }],
          ["gifsicle", { optimizationLevel: 3 }],
          ["imagemin-svgo", { plugins: [{ removeViewBox: false }] }],
        ],
      },
    }),
    new CssUrlRelativePlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[name].[id].[contenthash].css",
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }],
      },
      canPrint: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.pug",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/images/logo.png",
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: false,
        windows: true,
      },
    }),
  ],
  devServer: {
    stats: "errors-only",
  },
};
