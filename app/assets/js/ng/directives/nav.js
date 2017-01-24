module.exports = angular.module('TM').directive('tmNavigation', tmNavigation);

function tmNavigation() {
  var directive = {
    link: link,
    restrict: 'EA'
  };
  return directive;

  function link(scope, element, attrs) {
    // var $window = document.querySelector('window'),
    //     elementFromTop = element[0].offsetTop,
    //     showFromBottom = (attrs.showFromBottom) ? attrs.showFromBottom : 50;

    //     console.log('$window', $window);

    // // Calculate on scroll
    // $window.on('scroll', function(){

    //   // We have scrolled to the element, now do your stuff!
    //   if($window.scrollTop() >= elementFromTop){
    //     element.addClass('navigation-menu-is-sticky');
    //   } else {
    //     element.removeClass('navigation-menu-is-sticky');
    //   }
    // });
  }
}
