const path = require('path');
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    // publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    proxy: {
      '/api/**': 'http://localhost:3000',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            '@babel/plugin-transform-runtime',
            '@babel/transform-async-to-generator',
          ],
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        // use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: './client/index.html',
  //   }),
  //   new MiniCssExtractPlugin({
  //     filename: 'App.css',
  //   }),
  // ],
};
