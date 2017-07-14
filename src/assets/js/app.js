import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import classnames from 'classnames';
import ScrollLock from 'react-scrolllock';
// import { Provider } from 'react-redux'

import Navigation from './components/react/nav/nav';
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
          {this.props.isMobileMenu && <ScrollLock />}
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