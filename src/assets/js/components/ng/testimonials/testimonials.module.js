import angular from 'angular';

import component from './testimonials.component';
import service from './testimonials.service';

export default angular
  .module('TM.components.testimonials', [])
  .component('tmTestimonials', component)
  .factory('testimonialsService', service)
  .name;
