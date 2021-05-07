import 'sanitize.css';

import React from 'react';
import { MenuContextProvider } from 'context/mobileMenu';

import Main from 'layout/Main';

import Navigation from 'components/Navigation';
import Intro from 'components/Intro';
import GoToTop from 'components/GoToTop';
import WindowLock from 'components/WindowLock';

export const App = () => {
  return (
    <MenuContextProvider>
      <Intro />
      <Navigation />
      <Main />
      <GoToTop />
      <WindowLock />
    </MenuContextProvider>
  );
};

export default App;
