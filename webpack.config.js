'use strict';

var path = require('path');
var webpack = require('webpack');
var argv = require('yargs').argv;

// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

// PATHS
var PATHS = {
  app: path.join(__dirname, '/app'),
  dist: path.join(__dirname, '/dist')
};

//module.exports = {
var config = {
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
          presets: ['react', 'es2015']
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
    })
    // new ExtractTextPlugin("main.css", {allChunks: false})
  ]
};

// If production build then minify JS.
if(argv.prod){
  config.plugins.push(new webpackUglifyJsPlugin({
    cacheFolder: path.resolve(__dirname, 'public/cached_uglify/'),
    minimize: true,
    sourceMap: false,
    output: {
      comments: false
    },
    compressor: {
      warnings: false
    }
  }));
}

module.exports  = config;