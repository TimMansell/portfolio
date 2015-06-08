(function() {
    'use strict';

    angular
        .module('TM')
        .directive('tmGoToTop', tmGoToTop);

    //tmGoToTop.$inject = [''];

    function tmGoToTop() {
      var directive = {
        link: link,
        restrict: 'EA',
        template: '<a href="#top" class="top">Top</a>',
        replace: true
      };
      return directive;

      function link(scope, element, attrs) {
          
      }
    }
})();