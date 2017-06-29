import angular from 'angular';

import directive from './scrollBlur.directive';

export default angular
  .module('TM.components.scrollBlur', [])
  .directive('tmScrollBlur', directive)
  .name;
