import shuffleLetters from 'shuffle-letters';

tmShuffleContent.$inject = ['$interval'];

export default function tmShuffleContent($interval) {
  var directive = {
    link: link,
    restrict: 'EA'
  };
  return directive;

  function link(scope, element, attrs) {
    let $elements = angular.element(element).children(),
        elementsArray = Array.prototype.slice.apply($elements);
        // containerHeight = element.height();

    console.log('el', angular.element(elementsArray[0])[0]);

    // // Set height of container.
    // element.height(containerHeight);

    $interval(function(){
      $elements.addClass('hidden');

      shuffle();
    }, 4000);

    // Shuffle text.
    function shuffle(){
      angular.element(elementsArray[0]).removeClass('hidden');

      shuffleLetters(angular.element(elementsArray[0])[0]);

      elementsArray.push(elementsArray.shift());
    }

    // Init.
    shuffle(); 
  }
}
