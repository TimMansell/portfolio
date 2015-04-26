(function() {
    'use strict';

    angular
        .module('TM')
        .directive('tmNavigation', tmNavigation);

    function tmNavigation() {
      var directive = {
        link: link,
        //templateUrl: '/template/is/located/here.html',
        restrict: 'EA'
      };
      return directive;

      function link(scope, element, attrs) {
        var $window = angular.element(window);

        // Stick Navigation.
        element.stickyNavbar({
          mobileWidth: appConfig.breakpoints.xs,
          stickyModeClass: 'is-sticky'
          //startAt: 500
        });

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