import React from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';

import './Hero.scss';

export class Hero extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      styles: {}
    };
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

    handleScroll = throttle((e) => {
      const { blurFrom, blurTo } = this.props;

      const blur = blurFrom + ((blurTo - blurFrom) * (window.scrollY / window.innerHeight));
      const blurCss = (blur <= blurTo) ? {'filter': `blur(${blur}px)`} : {};

      this.setState(prevState => ({
        styles: blurCss
      }));
    }, 30)

    render () {
      const { styles } = this.state;

      return <div className="hero">
        <div className="hero__img" style={styles}></div>
      </div>;
    }
}

Hero.propTypes = {
  blurFrom: PropTypes.number.isRequired,
  blurTo: PropTypes.number.isRequired
};

export default Hero;
