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
            $container = (attrs.element) ? element.find(attrs.element) : element.children()[0];
        
        function positionContainer() {
          $container.css('top', ( ( element.height() - $container.height() - 20 ) / 2) + 'px' );
        }

        $window.on('resize', function(){ 
          positionContainer();  
        });

        // Init.
        positionContainer(); // On ready, resize intro
      }
    };
  }])
  .directive('tmCarousel', [function () { // Carousel.
      return {
          restrict: 'AE',
          link: function (scope, element, attrs) {
            var autoplay = (attrs.autoplay) ? true : false,
                speed =  (attrs.speed) ? attrs.speed : 3000;

              element.slick({
                autoplay: autoplay,
                autoplaySpeed: speed
              });
          }
      };
  }])
  .directive('tmShuffleContent', ['$interval', function ($interval) { // Shuffle text with random characters.
      return {
          restrict: 'AE',
          link: function (scope, element, attrs) {
            var $elements = element.children(),
                elementsArray = $elements.toArray(),
                containerHeight = element.height();

            // Set height of container.
            element.height(containerHeight);

            $interval(function(){
              $elements.hide();            
              shuffle();
            }, 4000);

            // Shuffle text.
            function shuffle(){
              angular.element(elementsArray[0]).show().shuffleLetters();

              elementsArray.push(elementsArray.shift());
            }

            // Init.
            shuffle();
          }
      };
  }])
  .directive('tmScrollFade', [function () { // Shuffle text with random characters.
      return {
          restrict: 'AE',
          link: function (scope, element, attrs) {
            var $window = angular.element(window),
                opacity;

            $window.on('scroll', function(e){
              opacity = 1 - ($window.scrollTop() / $window.height()) * 1.15;

              if (opacity >= 0){
                element.css('opacity', opacity);
              }
            })
          }
      };
  }]);