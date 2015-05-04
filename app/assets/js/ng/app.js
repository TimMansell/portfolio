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
(function() {
	angular
		.module('TM', ['duScroll']);
  		/*.config(['$locationProvider', function ($locationProvider) {
  	}]);*/
})();