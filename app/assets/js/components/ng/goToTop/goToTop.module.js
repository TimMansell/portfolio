import angular from 'angular';
import angularScroll from 'angular-scroll';

import directive from './goToTop.directive';

export default angular
  .module('TM.components.goToTop', ['duScroll'])
  .directive('tmGoToTop', directive)
  .name;
