import angular from 'angular';

import directive from './shuffleOnScreen.directive';

export default angular
  .module('TM.components.shuffleOnScreen', [])
  .directive('tmShuffleOnScreen', directive)
  .name;
