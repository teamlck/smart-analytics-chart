const merge = require('webpack-merge')
const path = require('path');
const webpackCommonConfig = require('./webpack.common.conf')

module.exports = merge(webpackCommonConfig, {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist'),
    library: 'smart-analytics',
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  plugins: []
})
