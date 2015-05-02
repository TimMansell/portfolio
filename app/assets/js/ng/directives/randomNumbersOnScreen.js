(function() {
    'use strict';

    angular
        .module('TM')
        .directive('tmRandomNumbersOnScreen', tmRandomNumbersOnScreen);

    tmRandomNumbersOnScreen.$inject = ['$timeout', '$filter'];

    function tmRandomNumbersOnScreen($timeout, $filter) {
      var directive = {
        scope: {},
        link: link,
        restrict: 'EA'
      };
      return directive;

      function link(scope, element, attrs) {
        var $window = angular.element(window),
            windowHasScrolled = 0,
            elementFromScreen = 0,
            elementHasCounted = false,
            graceFromBottom = 150;

        // Set height so element keeps it's height when text dissapears.
        element.css('height', element.height());

        // Calculate on scroll
        $window.on('scroll', function(){
          windowHasScrolled = $window.scrollTop() + $window.height();
          elementFromScreen = element.offset().top;

          // We have scrolled to the element, now do your stuff!
          if(windowHasScrolled >= (elementFromScreen + graceFromBottom) && elementHasCounted === false){
            countTo();    

            // We've shuffled once so turn off.
            elementHasCounted = !elementHasCounted;
          }
        });

        //countTo();  

        function countTo(){
          var e = element[0];
            var num, refreshInterval, duration, steps, step, countTo, value, increment;

            var calculate = function () {
                refreshInterval = 30;
                step = 0;
                scope.timoutId = null;
                countTo = 5000;
                duration = 5000;
                scope.value = 0;
                //countTo = parseInt(attrs.countTo) || 0;
                //scope.value = parseInt(attrs.value, 10) || 0;
                //duration = (parseFloat(attrs.duration) * 1000) || 0;

                steps = Math.ceil(duration / refreshInterval);
                increment = ((countTo - scope.value) / steps);
                num = scope.value;
            };

            var tick = function () {
                $timeout(function () {
                  num += increment;
                  step++;
                  if (step >= steps) {
                      num = countTo;

                      e.textContent = $filter('number')(countTo, 0);
                  } else {

                      e.textContent = $filter('number')(num, 0);
                      tick();
                  }
                }, refreshInterval);

            };

            var start = function () {
                calculate();
                tick();
            };

            start();
        }
      }
    }
})();