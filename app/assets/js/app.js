import angular from 'angular';
import angularScroll from 'angular-scroll';

import components from './components/app.components';

import webFonts from './components/webFonts/webFonts';

// Init app with dependencies.
export default angular.module('TM', ['duScroll', components]);