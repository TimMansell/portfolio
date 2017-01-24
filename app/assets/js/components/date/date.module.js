import angular from 'angular';

import component from './date.component';

export default angular
  .module('TM.components.date', [])
  .component('tmDate', component)
  .name;
