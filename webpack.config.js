const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/script.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.{js|jsx}$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(svg|png|jpe?g)$/,
        type: 'asset/resource'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new EslintWebpackPlugin({
      files: '{**/*,*}.{tsx,ts,js}'
    }),
    new StylelintWebpackPlugin({
      files: '{**/*,*}.css'
    })
  ],
  devServer: {
    open: {
      app: {
        name: 'Google Chrome'
      }
    },
    historyApiFallback: true
  }
};
