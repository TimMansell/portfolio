(function() {
    'use strict';

    angular
        .module('TM')
        .directive('tmWebFonts', tmWebFonts);

    //tmWebFonts.$inject = [''];

    function tmWebFonts() {
      var directive = {
        link: link,
        restrict: 'EA'
      };
      return directive;

      function link(scope, element, attrs) {
        WebFont.load({
          google: {
            families: ['Raleway:700,400']
          }
        });     
      }
    }
})();