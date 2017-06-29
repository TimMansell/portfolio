import angular from 'angular';

import directive from './shuffleContent.directive';

export default angular
  .module('TM.components.shuffle', [])
  .directive('tmShuffleContent', directive)
  .name;
