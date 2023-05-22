const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './themes/apollo/assets/script.js',
  devtool: 'cheap-source-map',
  output: {
    path: path.resolve(__dirname, './themes/apollo/assets/'),
    filename: 'bundle.js'
  },
};

module.exports = config;