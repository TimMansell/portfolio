module.exports = angular.module('TM').directive('tmRandomNumbersOnScreen', tmRandomNumbersOnScreen);

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
        showFromBottom = (attrs.showFromBottom) ? attrs.showFromBottom : 150;

    // Set height so element keeps it's height when text dissapears.
    element.css('height', element.height());

    // Calculate on scroll
    $window.on('scroll', function(){
      windowHasScrolled = $window.scrollTop() + $window.height();
      elementFromScreen = element.offset().top;

      // We have scrolled to the element, now do your stuff!
      if(windowHasScrolled >= (elementFromScreen + showFromBottom) && elementHasCounted === false){
        countTo();  

        // We've shuffled once so turn off.
        elementHasCounted = !elementHasCounted;
      }
    });

    function countTo(){
      var num = 0,
          refreshInterval = 30,
          step = 0,
          maxCount = (attrs.maxCount) ? attrs.maxCount : 5000,
          minCount = (attrs.minCount) ? attrs.minCount : 850,
          appendChar = (attrs.appendCharacter) ? attrs.appendCharacter: '',
          countTo = Math.floor(Math.random()*(maxCount-minCount+1)+minCount),
          duration = 5000,
          startValue = 0,
          steps,
          value,
          increment;

      var calculate = function () {
          steps = Math.ceil(duration / refreshInterval);
          increment = ((countTo - startValue) / steps);
          num = startValue;
      };

      var tick = function () {
          $timeout(function () {
            num += increment;
            step++;

            if (step >= steps) {
                num = countTo;

                element.html($filter('number')(countTo, 0) + appendChar);
            } else {

                element.html($filter('number')(num, 0) + appendChar);
                tick();
            }
          }, refreshInterval);
      };

      calculate();
      tick();
    }
  }
}
