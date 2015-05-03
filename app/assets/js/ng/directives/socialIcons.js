(function() {
    'use strict';

    angular
        .module('TM')
        .directive('tmSocialIcons', tmSocialIcons);

    function tmSocialIcons() {
      var directive = {
        link: link,
        templateUrl: 'assets/templates/social-icons.html',
        restrict: 'EA',
        // controller: portfolioController,
        // controllerAs: 'pf',
        // bindToController: true
      };
      return directive;

      function link(scope, element, attrs) {
        
      }

      // portfolioController.$inject = ['$scope', 'portfolioService'];

      // function portfolioController($scope, portfolioService) {
      //   var pf = this;
            
      //   pf.items = [];
         
      //   init();

      //   ////////////

      //   function init() {
      //       return portfolioService.get().then(function(data) {
      //           pf.items = data;

      //           return pf.items;
      //       });
      //   }
      // }
    }
})();