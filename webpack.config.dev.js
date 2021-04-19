const path = require("path");
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base')
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ROOT_PATH = __dirname;
const libraryName = 'react-sdk';

module.exports = merge(baseWebpackConfig, {
  mode: "development",
  output: {
    filename: libraryName + '.umd.js',
    path: path.resolve(ROOT_PATH, 'dist'),
    libraryTarget: 'umd',
    umdNamedDefine: true,
    libraryExport: 'default'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: "./public/index.html",
    }),
  ],
  devServer: {
    contentBase: path.join(ROOT_PATH, "dist"),
    compress: true,
    open: true,
    port: 9876,
  },
});
