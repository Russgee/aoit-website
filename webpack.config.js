const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './themes/alpha-site-starter/assets/script.js',
  devtool: 'cheap-source-map',
  output: {
    path: path.resolve(__dirname, './themes/alpha-site-starter/assets/'),
    filename: 'bundle.js'
  }
};

module.exports = config;