import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import WebFont from 'webfontloader';

import configureStore from './store/configureStore';

import 'sanitize.css';
import './scss/global.scss';
import App from './app';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));

// Load web fonts.
WebFont.load({
  google:{
    families: ['Open Sans:700,400']
  }
});  