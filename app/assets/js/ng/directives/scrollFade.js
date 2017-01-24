module.exports = angular.module('TM').directive('tmScrollFade', tmScrollFade);

function tmScrollFade() {
  var directive = {
    // link: link,
    restrict: 'EA'
  };
  return directive;

  function link(scope, element, attrs) {
    var $window = angular.element(window),
        opacity;

    $window.on('scroll', function(e){
      opacity = 1 - ($window.scrollTop() / $window.height()) * 1.15;

      if (opacity >= 0){
        element.css('opacity', opacity);
      }
    });    
  }
}
