// var ExtractTextPlugin = require("extract-text-webpack-plugin");

'use strict';
var path = require('path');
var webpack = require('webpack');

// PATHS
var PATHS = {
  app: path.join(__dirname, '/app'),
  dist: path.join(__dirname, '/dist')
};

module.exports = {
  context: PATHS.app,
  entry: {
    app: PATHS.app + '/assets/js/app.js'
  },
  output: {
    path: PATHS.dist + '/assets/js',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      // { 
      //   test: /\.scss$/,
      //   loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") 
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'html'        
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, "./app/scss"),
      path.resolve(__dirname, "./node_modules")
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'root.jQuery': 'jquery'
    }),
    // new ExtractTextPlugin("main.css", {allChunks: false})
  ]
};