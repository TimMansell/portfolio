(function() {
    'use strict';

    angular
        .module('TM')
        .directive('tmShuffleOnScreen', tmShuffleOnScreen);

    //tmShuffleOnScreen.$inject = [''];

    function tmShuffleOnScreen() {
      var directive = {
        link: link,
        restrict: 'EA'
      };
      return directive;

      function link(scope, element, attrs) {
        var $window = angular.element(window),
            windowHasScrolled = 0,
            elementFromScreen = 0,
            elementHasShuffled = false,
            showFromBottom = (attrs.showFromBottom) ? attrs.showFromBottom : 50;

        // Set height so element keeps it's height when text dissapears.
        element.css('height', element.height());

        // Calculate on scroll
        $window.on('scroll', function(){
          windowHasScrolled = $window.scrollTop() + $window.height();
          elementFromScreen = element.offset().top;

          // We have scrolled to the element, now do your stuff!
          if(windowHasScrolled >= (elementFromScreen + showFromBottom) && elementHasShuffled === false){
            element.shuffleLetters();    

            // We've shuffled once so turn off.
            elementHasShuffled = !elementHasShuffled;
          }
        });
      }
    }
})();