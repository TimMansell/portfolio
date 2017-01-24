// require('shuffleLetters');

module.exports = angular.module('TM').directive('tmShuffleContent', tmShuffleContent);

tmShuffleContent.$inject = ['$interval'];

function tmShuffleContent($interval) {
  var directive = {
    //link: link,
    restrict: 'EA'
  };
  return directive;

  function link(scope, element, attrs) {
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
      $(elementsArray[0]).show().shuffleLetters();

      elementsArray.push(elementsArray.shift());
    }

    // Init.
    shuffle(); 
  }
}
