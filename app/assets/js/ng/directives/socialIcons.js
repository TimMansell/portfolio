(function() {
    'use strict';

    angular
        .module('TM')
        .directive('tmSocialIcons', tmSocialIcons);

    //tmSocialIcons.$inject = [''];

    function tmSocialIcons() {
      var directive = {
        link: link,
        templateUrl: 'assets/templates/social-icons.html',
        restrict: 'EA'
      };
      return directive;

      function link(scope, element, attrs) {
        
      }
    }
})();