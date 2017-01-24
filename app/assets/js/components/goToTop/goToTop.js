module.exports = angular.module('TM').directive('tmGoToTop', tmGoToTop);

tmGoToTop.$inject = ['$window'];

function tmGoToTop($window) {
  var directive = {
    // link: link,
    restrict: 'EA',
    template: '<a href="#" class="goto-top"></a>',
    replace: true
  };
  return directive;

  function link(scope, element, attrs) {
    var self = {
      elems: {
        $w: $($window),
        $body: $('html, body')
      },
      config:{
        showAt: attrs.showAt || 800
      }
    };

    self.init = function(){
      self.checkPosition();

      self.initEvents();
    };

    self.initEvents = function(){
      
      // Check position of page on scroll.
      self.elems.$w.on('scroll', function(e) {
        self.checkPosition();
      });

      // Click on button, now go to top.
      element.on('click', function(e){
        e.preventDefault();

        self.elems.$body.animate({ scrollTop: 0 }, 'slow');
      });
    };

    // Check position of scrollbar.
    self.checkPosition = function(){
      if(self.elems.$w.scrollTop() >= self.config.showAt){
        element.addClass('goto-top_show');
      } else {
        element.removeClass('goto-top_show');
      }
    };

    // Init component.
    self.init();
  }
}