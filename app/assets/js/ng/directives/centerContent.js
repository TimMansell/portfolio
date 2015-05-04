(function() {
    'use strict';

    angular
        .module('TM')
        .directive('tmCenterContent', tmCenterContent);

    //tmCenterContent.$inject = [''];

    function tmCenterContent() {
      var directive = {
        link: link,
        restrict: 'EA'
      };
      return directive;

      function link(scope, element, attrs) {
        var $window = angular.element(window),
            $container = (attrs.element) ? element.find(attrs.element) : element.children()[0];
        
        function positionContainer() {
          $container.css('top', ( ( element.height() - $container.height() - 20 ) / 2) + 'px' );
        }

        $window.on('resize', function(){ 
          positionContainer();  
        });

        // Init.
        positionContainer();
      }
    }
})();