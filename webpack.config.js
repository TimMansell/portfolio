'use strict';
var path = require('path');
var webpack = require('webpack');

// PATHS
var PATHS = {
  app: path.join(__dirname, '/app')
};

module.exports = {
  context: PATHS.app,
  entry: {
    app: PATHS.app + '/assets/js/app.js'
  },
  output: {
    path: PATHS.app + '/assets/js',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
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
  }
};