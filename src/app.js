import React from 'react';
import { connect } from 'react-redux';

import SectionWrap from './layout/section/section';

import Navigation from './components/nav/nav';
import {Intro} from './components/intro/intro';
import {Profile} from './components/profile/profile';
import {Skills} from './components/skills/skills';
import {RetiredSkills} from './components/skills/retiredSkills';
import {CurrentStack} from './components/currentStack/currentStack';
import {Portfolio} from './components/portfolio/portfolio';
import {Stats} from './components/stats/stats';
import {Presentations} from './components/presentations/presentations';
import {Testimonials} from './components/testimonials/testimonials';
import {Footer} from './components/footer/footer';
import {GoToTop} from './components/goToTop/goToTop';

import WindowLock from './components/windowLock/windowLock';

export class App extends React.Component {
    render() {
        return (<div>
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
          
        </div>);
    }
}

function mapStateToProps(state, ownProps) {
  return {
    isMobileMenu: state.isMobileMenu
  };
}

export default connect(mapStateToProps)(App);