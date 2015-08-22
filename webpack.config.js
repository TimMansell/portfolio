'use strict';
var path = require('path');
var webpack = require('webpack');

// PATHS
var PATHS = {
  app: path.join(__dirname, '/app'),
  bower: path.join(__dirname, '/app/bower_components')
};

module.exports = {
  context: PATHS.app,
  resolve: {
    root: PATHS.bower,
    alias: {
      'jquery': PATHS.bower + '/jquery/dist/jquery.js'
    }
  },
  entry: PATHS.app + '/assets/js/entry.js',
  output: {
    path: PATHS.app + '/assets/js',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'root.jQuery': 'jquery'
    })
  ]
};