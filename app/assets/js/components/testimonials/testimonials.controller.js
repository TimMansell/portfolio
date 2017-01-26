testimonialsController.$inject = ['$scope', '$interval', 'testimonialsService'];

export default function testimonialsController($scope, $interval, testimonialsService) {
  let ctrl = this;
      
  let items = [];
   
  init();

  function init() {
    return testimonialsService.get().then(function(data) {
      items = data;

      rotateTestimonials();

      return;
    });
  }

  function rotateTestimonials(){
  	rotate();
  	
  	$interval(rotate, 5000);
  }

  function rotate(){
  	ctrl.testimonial = items[0];

  	items.push(items.shift());
  }
}
