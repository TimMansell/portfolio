import shuffleLetters from 'shuffle-letters';

// import controller from './shuffle.controller';
// import template from './shuffle.html'

tmShuffleContent.$inject = ['$interval'];

export default function tmShuffleContent($interval) {
  var directive = {
    link: link,
    restrict: 'EA',
    // template,
    // transclude: true
    // controller: controller
  };
  return directive;

  function link(scope, element, attrs) {
    let $elements = angular.element(element).children(),
        elementsArray = Array.prototype.slice.apply($elements),
        containerHeight = angular.element(elementsArray[0]).height();

    // console.log('el', angular.element(elementsArray[0])[0]);

    // // Set height of container.
    element.height(containerHeight).css({display:'block'});

    shuffle();

    $interval(shuffle, 4000);

    // Shuffle text.
    function shuffle(){
      $elements.addClass('hidden-xs-up');

      angular.element(elementsArray[0]).removeClass('hidden-xs-up');

      shuffleLetters(angular.element(elementsArray[0])[0]);

      elementsArray.push(elementsArray.shift());
    }

    // Init.
    shuffle(); 
  }
}
