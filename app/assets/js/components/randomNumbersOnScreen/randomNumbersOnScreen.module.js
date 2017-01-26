import angular from 'angular';

import directive from './randomNumbersOnScreen.directive';

export default angular
  .module('TM.components.randomNumbersOnScreen', [])
  .directive('tmRandomNumbersOnScreen', directive)
  .name;
