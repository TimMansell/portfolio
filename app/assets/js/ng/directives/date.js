module.exports = angular.module('TM').directive('tmDate', tmDate);

tmDate.$inject = ['$filter'];

function tmDate($filter) {
  var directive = {
    link: link,
    restrict: 'EA'
  };
  return directive;

  function link(scope, element, attrs) {
    element.html($filter('date')(new Date(), 'yyyy'));
  }
}
