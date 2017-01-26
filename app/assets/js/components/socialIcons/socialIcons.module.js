import angular from 'angular';

import component from './socialIcons.component';

let socialIconsModule =  angular
  .module('TM.components.socialIcons', [])
  .component('tmSocialIcons', component)
  .name;

export default socialIconsModule;