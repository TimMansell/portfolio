import angular from 'angular';

import portfolioModule from './portfolio/portfolio.module';
import dateModule from './date/date.module';
import goToTopModule from './goToTop/goToTop.module';
import shuffleModule from './shuffle/shuffle.module';

// Init app with dependencies.
export default angular
	.module('TM.components', [portfolioModule, dateModule, goToTopModule, shuffleModule])
	.name;