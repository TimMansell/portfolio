import React from 'react';
import { connect } from 'react-redux';

import Navigation from './components/nav/nav';
import {Intro} from './components/intro/intro';

import {Profile} from './components/profile/profile';
import {Skills} from './components/skills/skills';
import {Portfolio} from './components/portfolio/portfolio';
import {Stats} from './components/stats/stats';
import {Presentations} from './components/presentations/presentations';
import {Testimonials} from './components/testimonials/testimonials';


import {Footer} from './components/footer/footer';
import {GoToTop} from './components/goToTop/goToTop';

import WindowLock from './components/windowLock/windowLock';

class App extends React.Component {
    render() {
        return (<div>
          <Navigation />
          <Intro />
          <main className="content">
            <Profile />
            <Skills />
            <Portfolio />
            <Stats />
            <Presentations />
            <Testimonials />
          </main>
          <Footer />
          <GoToTop />
          <WindowLock />
          
        </div>);
    }
}

function mapStateToProps(state, ownProps) {
  return {
    isMobileMenu: state.isMobileMenu
  };
}

export default connect(mapStateToProps)(App);