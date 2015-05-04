(function() {
    'use strict';

    angular
        .module('TM')
        .directive('tmNavigation', tmNavigation);

    //tmNavigation.$inject = [''];

    function tmNavigation() {
      var directive = {
        link: link,
        restrict: 'EA'
      };
      return directive;

      function link(scope, element, attrs) {
        var $window = angular.element(window),
            elementFromTop = element.offset().top,
            showFromBottom = (attrs.showFromBottom) ? attrs.showFromBottom : 50;

        // Calculate on scroll
        $window.on('scroll', function(){

          // We have scrolled to the element, now do your stuff!
          if($window.scrollTop() >= elementFromTop){
            element.addClass('navigation-menu-is-sticky');
          } else {
            element.removeClass('navigation-menu-is-sticky');
          }
        });
      }
    }
})();