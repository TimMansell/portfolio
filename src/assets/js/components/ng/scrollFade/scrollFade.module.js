import angular from 'angular';

import directive from './scrollFade.directive';

export default angular
  .module('TM.components.scrollFade', [])
  .directive('tmScrollFade', directive)
  .name;
