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
      'jquery': PATHS.bower + '/jquery/dist/jquery.js',
      'angular-scroll': PATHS.bower + '/angular-scroll/angular-scroll.js',
      'shuffleLetters': path.resolve(__dirname, './app/assets/js/lib/jquery.shuffleLetters.js'),
    }
  },
  entry: {
    app: PATHS.app + '/assets/js/entry.js',
    vendor: ['jquery', 'angular']
  },
  output: {
    path: PATHS.app + '/assets/js',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'root.jQuery': 'jquery'
    })
  ]
};