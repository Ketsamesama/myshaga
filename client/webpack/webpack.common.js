const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      app: path.resolve(__dirname, '..', './src/app'),
      assets: path.resolve(__dirname, '..', './src/assets'),
      entities: path.resolve(__dirname, '..', './src/entities'),
      pages: path.resolve(__dirname, '..', './src/pages'),
      shared: path.resolve(__dirname, '..', './src/shared'),
      store: path.resolve(__dirname, '..', './src/store'),
      widgets: path.resolve(__dirname, '..', './src/widgets'),
      supabaseConfig: path.resolve(__dirname, '..', './src/supabaseConfig/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(?:ico|git|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', './src/assets'),
          to: path.resolve(__dirname, '..', './build/assets'),
          noErrorOnMissing: true,
        },
        {
          from: path.resolve(__dirname, '..', './public/favicon.ico'),
          to: path.resolve(__dirname, '..', './build'),
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
};
