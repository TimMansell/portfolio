import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import WebFont from 'webfontloader';

import configureStore from './store/configureStore';

import './assets/css/main.css';
import App from './assets/js/app';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));

// Load web fonts.
WebFont.load({
  google:{
    families: ['Raleway:700,400']
  }
});  