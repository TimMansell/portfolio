import React from 'react';
import { connect } from 'react-redux';

import SectionWrap from './layout/SectionWrap';

import Navigation from './components/Navigation';
import Intro from './components/Intro';
import Profile from './components/Profile';
import Skills from './components/Skills';
import RetiredSkills from './components/RetiredSkills';
import CurrentStack from './components/CurrentStack';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import Presentations from './components/Presentations';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';

import WindowLock from './components/WindowLock';

export const App = () => {
  return <>
    <Navigation />
    <Intro />
    <main className="content">
      <SectionWrap id="profile" background="tertiary">
        <Profile />
      </SectionWrap>

      <SectionWrap id="skills" background="primary">
        <Skills />
      </SectionWrap>
      
      <SectionWrap id="retired-skills" background="secondary">
        <RetiredSkills />
      </SectionWrap>
      
      <SectionWrap id="stack" background="tertiary" container="medium">
        <CurrentStack />
      </SectionWrap>
      
      <SectionWrap id="portfolio" background="secondary" container="large">
        <Portfolio />
      </SectionWrap>
      
      <SectionWrap id="stats" background="primary">
        <Stats />
      </SectionWrap>
      
      <SectionWrap id="presentations" background="secondary">
        <Presentations />
      </SectionWrap>
      
      <SectionWrap id="testimonials" background="tertiary">
        <Testimonials />
      </SectionWrap>
    </main>
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