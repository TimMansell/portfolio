import angular from 'angular';
import angularScroll from 'angular-scroll';

import components from './components/ng/app.components';

import webFonts from './components/ng/webFonts/webFonts';


import React from 'react';
import ReactDOM from 'react-dom';

import {Copyright} from './components/react/date/date';

ReactDOM.render(
  <Copyright />,
  document.getElementById('date')
);

// Init app with dependencies.
export default angular.module('TM', ['duScroll', components]);