'use strict';

/* Directives */
angular.module('TM.directives')
  .directive('tmLazyLoad', [function () { // Lazy load images.
      return {
          restrict: 'A',
          link: function (scope, element, attrs) {
              /*element.show().lazyload({
                  effect: "fadeIn",
                  threshold: 250,
                  skip_invisible: true
              });*/
          }
      };
  }])
  .directive('tmCenterContent', [function () { // Center content in a container.
      return {
          restrict: 'A',
          link: function (scope, element, attrs) {
            var $window = angular.element(window),
                $container = element.find('.container');
            
            function positionContainer() {
              $container.css( 'top', ( ( element.height() - $container.height() - 20 ) / 2) + 'px' );
            }

            $window.on('resize', function(){ 
              positionContainer();  

              console.log('dfas');
            });

            // Init.
            positionContainer(); // On ready, resize intro
          }
      };
  }])
  .directive('tmCarousel', [function () { // Carousel.
      return {
          restrict: 'A',
          link: function (scope, element, attrs) {

              /*element.bxSlider({
                  controls: false,
                  auto: true,
                  useCSS: false,
                  pause: 5000
              });*/
          }
      };
  }]);
