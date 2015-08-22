module.exports = angular.module('TM').directive('tmSocialIcons', tmSocialIcons);

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