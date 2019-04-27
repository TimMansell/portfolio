import React from 'react';
import { connect } from 'react-redux';

import Main from './layout/Main';

import Navigation from './components/Navigation';
import Intro from './components/Intro';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';
import WindowLock from './components/WindowLock';

export const App = () => {
  return <>
    <Navigation />
    <Intro />
    <Main />
    <Footer />
    <GoToTop />
    <WindowLock />
  </>;
}

function mapStateToProps(state, ownProps) {
  return {
    isMobileMenu: state.isMobileMenu
  };
}

export default connect(mapStateToProps)(App);