import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import configureStore from './store/configureStore';

import 'sanitize.css';
import './scss/global.scss';
import App from 'app';

const store = configureStore();

ReactDOM.render(
  <App />,
  document.getElementById('root'));

// Load web fonts.
WebFont.load({
  google: {
    families: ['Open Sans:700,400']
  }
});
