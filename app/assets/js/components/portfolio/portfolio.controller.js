portfolioController.$inject = ['$scope', 'portfolioService'];

export default function portfolioController($scope, portfolioService) {
  var ctrl = this;
      
  ctrl.items = [];
   
  init();

  function init() {
    return portfolioService.get().then(function(data) {
      ctrl.items = data;

      return ctrl.items;
    });
  }
}
