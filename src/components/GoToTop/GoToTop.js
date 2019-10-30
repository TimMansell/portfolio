import React from 'react';
import { Link } from 'react-scroll';
import throttle from 'lodash.throttle';
import classnames from 'classnames';

import './GoToTop.scss';

import { IconAngleUp } from 'components/Icon';

export class GoToTop extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isVisible: false
    };
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

    handleScroll = throttle((e) => {
      if (window.scrollY >= 800) {
        this.setState(prevState => ({
          isVisible: true
        }));
      } else {
        this.setState(prevState => ({
          isVisible: false
        }));
      }
    }, 30)

    render () {
      const { isVisible } = this.state;
      const classes = classnames('goto-top', {'goto-top--show': isVisible});

      return <Link data-e2e="goto-top-btn" className={classes} to="root" smooth={true}>
        <IconAngleUp size="sm" />
      </Link>;
    }
}

export default GoToTop;
