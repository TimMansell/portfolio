(function() {
    'use strict';

    angular
        .module('TM')
        .directive('tmNavigation', tmNavigation);

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

        // Set height so element keeps it's height when text dissapears.
        element.css('height', element.height());

        // Calculate on scroll
        $window.on('scroll', function(){

          // We have scrolled to the element, now do your stuff!
          if($window.scrollTop() >= elementFromTop){
            element.addClass('is-sticky');
          } else {
            element.removeClass('is-sticky');
          }
        });

        // Stick Navigation.
        /*element.stickyNavbar({
          mobileWidth: appConfig.breakpoints.xs,
          stickyModeClass: 'is-sticky'
          //startAt: 500
        });*/

        /*element.find('ul').onePageNav({
          scrollSpeed: 400 
        });*/

        /*$window.on('scroll', function(){
          if($window.scrollTop() < $window.height()/2) {
            element.find('li').removeClass('current');
            //element.
            //scope.
          }
        });

        $window.on('resize', function(e){ 
          console.log('e', e);
          if(e.target.innerWidth > appConfig.breakpoints.xs){

          }
        });*/
      }
    }
})();