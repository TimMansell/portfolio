(function() {
    'use strict';

    angular
        .module('TM')
        .directive('tmScrollBlur', tmScrollBlur);

    //tmScrollBlur.$inject = [''];

    function tmScrollBlur() {
      var directive = {
        link: link,
        restrict: 'EA'
      };
      return directive;

      function link(scope, element, attrs) {
        var $window = angular.element(window),
            blurFrom = (attrs.blurFrom) ? parseInt(attrs.blurFrom) : 0,
            blurTo = (attrs.blurTo) ? parseInt(attrs.blurTo) : 10;

        
        // Blur on scroll
        $window.on('scroll', function(e){
          blur = blurFrom + ( (blurTo - blurFrom) * ($window.scrollTop() / $window.height()));

          if(blur <= blurTo){
            element.css({
              '-webkit-filter': 'blur('+blur+'px)',
              'filter': 'blur('+blur+'px)'
            });
          }
        });    
      }
    }
})();
