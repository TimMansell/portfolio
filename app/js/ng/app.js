'use strict';

// Some variables.
var appConfig = {
	breakpoints: {
		xs: 767,
		sm: 991,
		md: 1199
	}
};

// Init app with dependencies.
angular.module('TM', ['TM.directives'])
  .config(['$locationProvider', function ($locationProvider) {
  }]);

// Namespacing.
angular.module('TM.directives', []);