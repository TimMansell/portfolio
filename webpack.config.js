'use strict';
var path = require('path');

// PATHS
var PATHS = {
  app: path.join(__dirname, '/app'),
  bower: path.join(__dirname, '/app/bower_components')
};

module.exports = {
  resolve: {
    root: PATHS.bower,
  },
  entry: PATHS.app + '/assets/js/entry.js',
  output: {
    path: PATHS.app + '/assets/js',
    filename: 'bundle.js',
  }
};