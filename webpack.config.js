const webpack = require('webpack');
const path = require('path');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: './themes/apollo/assets/script.js',
  devtool: 'cheap-source-map',
  output: {
    path: path.resolve(__dirname, './themes/apollo/assets/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset",
      },
    ],
  },
};

module.exports = config;