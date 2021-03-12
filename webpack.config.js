const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");

const loadModeConfig = env => require(`./build-utils/${env}.config`);

module.exports = env =>
  merge(
    {
      mode: env,
      entry: "./src/js/index.js",
      target: "web",
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].[contenthash].js",
      },
      optimization: {
        moduleIds: "deterministic",
        runtimeChunk: "single",
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendors",
              chunks: "all",
            },
          },
        },
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader", "postcss-loader"],
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
          },
          {
            test: /\.pug$/,
            use: [
              {
                loader: "pug-loader",
                options: {
                  pretty: true,
                },
              },
            ],
          },
          {
            test: /\.hbs$/,
            use: "handlebars-loader",
          },
          {
            test: /\.(svg)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "assets/images/icons/[name].[ext]",
                  context: path.resolve(__dirname, "src/"),
                  outputPath: "/",
                  publicPath: "./",
                  useRelativePaths: true,
                },
              },
            ],
          },
          {
            test: /\.(pdf)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "assets/docs/[name].[ext]",
                  context: path.resolve(__dirname, "src/"),
                  outputPath: "/",
                  publicPath: "./",
                  useRelativePaths: true,
                },
              },
            ],
          },
          {
            test: /\.(woff|woff2)$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  name: "fonts/[name].[ext]",
                  context: path.resolve(__dirname, "src/"),
                  outputPath: "/",
                  publicPath: "../",
                  useRelativePaths: true,
                },
              },
            ],
          },
        ],
      },
      plugins: [new CleanWebpackPlugin()],
    },
    loadModeConfig(env),
  );
