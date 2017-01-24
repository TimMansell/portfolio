import angular from 'angular';

import portfolioModule from './portfolio/portfolio.module';
import dateModule from './date/date.module';

// Init app with dependencies.
export default angular
	.module('TM.components', [portfolioModule, dateModule])
	.name;