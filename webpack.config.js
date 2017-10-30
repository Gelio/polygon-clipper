const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CONFIG = {
  distPath: path.resolve(__dirname, 'dist'),
  srcPath: path.resolve(__dirname, 'src')
};

module.exports = {
  entry: './src/index',
  output: {
    path: CONFIG.distPath,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: CONFIG.distPath
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.ts$/,
        use: ['ts-loader', 'tslint-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      CONFIG.srcPath,
      'node_modules'
    ]
  },
  plugins: [
    new CopyPlugin([{ from: 'public' }]),
    new ExtractTextPlugin('styles.css')
  ]
};
