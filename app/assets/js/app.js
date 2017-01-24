import angular from 'angular';
import angularScroll from 'angular-scroll';

import components from './components/app.components';

// Init app with dependencies.
export default angular.module('TM', ['duScroll', components]);