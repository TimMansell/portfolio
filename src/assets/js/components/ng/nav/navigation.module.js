import angular from 'angular';

import component from './navigation.directive';

export default angular
  .module('TM.components.navigation', [])
  .directive('tmNavigation', component)
  .name;
