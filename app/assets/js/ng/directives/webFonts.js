require('webfontloader');

module.exports = angular.module('TM').directive('tmWebFonts', tmWebFonts);

function tmWebFonts() {
  var directive = {
    link: link,
    restrict: 'EA'
  };
  return directive;

  function link(scope, element, attrs) {
    WebFont.load({
      google: {
        families: ['Raleway:700,400']
      }
    });     
  }
}
