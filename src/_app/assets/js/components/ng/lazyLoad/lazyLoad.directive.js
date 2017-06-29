import Blazy from 'bLazy';

export default function tmLazyLoad() {
  var directive = {
    link: link,
    restrict: 'EA'
  };
  return directive;

  function link(scope, element, attrs) {
    var bLazy = new Blazy({
        offset: 600
    });  

    // blazy doesn't like {{}} in data-src so we need to add it after.
    element.attr('data-src', attrs.img);
  }
}