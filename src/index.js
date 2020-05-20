import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import 'sanitize.css';
import './scss/global.scss';
import App from 'app';

ReactDOM.render(
  <App />,
  document.getElementById('root'));

// Load web fonts.
WebFont.load({
  google: {
    families: ['Open Sans:700,400']
  }
});
