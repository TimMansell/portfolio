import angular from 'angular';

import component from './lazyLoad.directive';

export default angular
  .module('TM.components.lazyLoad', [])
  .directive('tmLazyLoad', component)
  .name;
