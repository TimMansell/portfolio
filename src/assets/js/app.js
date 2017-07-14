import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import classnames from 'classnames';

// import { Provider } from 'react-redux'

import Navigation from './nav/nav';
import {Intro} from './intro/intro';

import {Profile} from './profile/profile';
import {Skills} from './skills/skills';
import {Portfolio} from './portfolio/portfolio';
import {Stats} from './stats/stats';
import {Presentations} from './presentations/presentations';
import {Testimonials} from './testimonials/testimonials';


import {Footer} from './footer/footer';
import {GoToTop} from './goToTop/goToTop';

import WindowLock from './windowLock/windowLock';

class App extends React.Component {
    render() {
      // let classes = classnames('full-height', {
			//   'no-scroll': this.props.isMobileMenu
		  // });

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

//no-scroll

// Init app.
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );