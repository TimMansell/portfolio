require('slick-carousel');

module.exports = angular.module('TM').directive('tmCarousel', tmCarousel);

function tmCarousel() {
  var directive = {
    link: link,
    restrict: 'EA'
  };
  return directive;

  function link(scope, element, attrs) {
    var autoplay = (attrs.autoplay) ? true : false,
        speed =  (attrs.speed) ? attrs.speed : 3000;

    element.slick({
      autoplay: autoplay,
      autoplaySpeed: speed,
      adaptiveHeight: true
    });        
  }
}
