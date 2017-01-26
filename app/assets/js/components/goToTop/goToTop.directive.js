import template from './goToTop.html'

tmGoToTop.$inject = ['$window', '$document'];

export default function tmGoToTop($window, $document) {
  var directive = {
    link: link,
    restrict: 'EA',
    template,
    replace: true
  };
  return directive;

  function link(scope, element, attrs) {
    let config = {
      showAt: attrs.showAt || 800
    };

    function init(){
      checkPosition();

      initEvents();
    };

    function initEvents(){
      
      // Check position of page on scroll.
      $window.addEventListener('scroll', function() {
        
        checkPosition();
      });

      // Click on button, now go to top.
      //element.on('click', function(e){
      element[0].addEventListener('click', function(e) {
        e.preventDefault();

        $document.scrollTopAnimated(0, 500);
      });
    };

    // Check position of scrollbar.
    function checkPosition(){
      if($window.scrollY >= config.showAt){
        // console.log('cp', $window.scrollTop);
        element.addClass('goto-top__show');
      } else {
        element.removeClass('goto-top__show');
      }
    };

    // Init component.
    init();
  }
}