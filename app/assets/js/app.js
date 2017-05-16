import React from 'react';
import ReactDOM from 'react-dom';

import {Navigation} from './components/react/nav/nav';
import {Intro} from './components/react/intro/intro';

import {Profile} from './components/react/profile/profile';
import {Skills} from './components/react/skills/skills';
import {Portfolio} from './components/react/portfolio/portfolio';
import {Stats} from './components/react/stats/stats';
import {Presentations} from './components/react/presentations/presentations';
import {Testimonials} from './components/react/testimonials/testimonials';


import {Footer} from './components/react/footer/footer';
import {GoToTop} from './components/react/goToTop/goToTop';

class App extends React.Component {
    render() {
        return <div className="full-height">
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
          
        </div>
    }
}

// Init app.
ReactDOM.render(
  <App />,
  document.getElementById('app')
);