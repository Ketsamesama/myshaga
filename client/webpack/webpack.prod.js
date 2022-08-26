const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'procces.env.name': JSON.stringify('Codevolution'),
    }),
    new BundleAnalyzerPlugin(),
  ],
};