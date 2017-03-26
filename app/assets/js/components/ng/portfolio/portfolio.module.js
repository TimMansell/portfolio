import angular from 'angular';

import component from './portfolio.component';
import service from './portfolio.service';

export default angular
  .module('TM.components.portfolio', [])
  .component('tmPortfolio', component)
  .factory('portfolioService', service)
  .name;
