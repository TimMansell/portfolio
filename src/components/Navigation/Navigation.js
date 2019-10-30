import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setMobileMenu } from 'actions';

import classnames from 'classnames';
import { Link } from 'react-scroll';

import Hamburger from 'components/Hamburger';

import './Navigation.scss';

export class Navigation extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isFixedNav: false
    };

    this.refNavigation = React.createRef();
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);

    this.setState(prevState => ({
      offset: this.refNavigation.current.offsetTop
    }));
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const { offset } = this.state;
    // eslint-disable-next-line no-tabs
    let	isFixedNav = false;

    if (scrollTop >= offset) {
      isFixedNav = true;
    } else {
      isFixedNav = false;
    }

    this.setState(prevState => ({
      isFixedNav: isFixedNav
    }));
  }

  closeMenu = () => {
    const { setMobileMenu } = this.props;

    setMobileMenu(false);
  }

  render () {
    const { isMobileMenu } = this.props;
    const { isFixedNav } = this.state;

    const navClasses = classnames('navigation', {
      'navigation--is-sticky': isFixedNav && !isMobileMenu,
      'navigation--active': isMobileMenu
    });

    const menuClasses = classnames('navigation__menu', {
      'navigation__menu--active': isMobileMenu
    });

    const linkClasses = classnames('navigation__menu-link', {
      'navigation__menu-link--is-sticky': isFixedNav && !isMobileMenu
    });

    return <nav id="nav" className={navClasses} ref={this.refNavigation}>
      <ul className={menuClasses}>
        <li className="navigation__menu-item">
          <Link data-e2e="navigation-profile" className={linkClasses} activeClass="navigation__menu-link--active" to="profile" smooth={true} spy={true} duration={500} onClick={this.closeMenu}>Profile</Link>
        </li>
        <li className="navigation__menu-item">
          <Link data-e2e="navigation-skills" className={linkClasses} activeClass="navigation__menu-link--active" to="skills" smooth={true} spy={true} duration={500} onClick={this.closeMenu}>Skills</Link>
        </li>
        <li className="navigation__menu-item">
          <Link data-e2e="navigation-retired-skills" className={linkClasses} activeClass="navigation__menu-link--active" to="retired-skills" smooth={true} spy={true} duration={500} onClick={this.closeMenu}>Retired Skills</Link>
        </li>
        <li className="navigation__menu-item">
          <Link data-e2e="navigation-stack" className={linkClasses} activeClass="navigation__menu-link--active" to="stack" smooth={true} spy={true} duration={500} onClick={this.closeMenu}>Stack</Link>
        </li>
        <li className="navigation__menu-item">
          <Link data-e2e="navigation-portfolio" className={linkClasses} activeClass="navigation__menu-link--active" to="portfolio" smooth={true} spy={true} duration={500} onClick={this.closeMenu}>Portfolio</Link>
        </li>
        <li className="navigation__menu-item">
          <Link data-e2e="navigation-presentations" className={linkClasses} activeClass="navigation__menu-link--active" to="presentations" smooth={true} spy={true} duration={500} onClick={this.closeMenu}>Presentations</Link>
        </li>
        <li className="navigation__menu-item">
          <Link data-e2e="navigation-testimonials" className={linkClasses} activeClass="navigation__menu-link--active" to="testimonials" smooth={true} spy={true} duration={500} onClick={this.closeMenu}>Testimonials</Link>
        </li>
        <li className="navigation__menu-item">
          <Link data-e2e="navigation-contact" className={linkClasses} activeClass="navigation__menu-link--active" to="contact" smooth={true} spy={true} duration={500} onClick={this.closeMenu}>Contact</Link>
        </li>
      </ul>

      <Hamburger />
    </nav>;
  }
}

function mapStateToProps (state, ownProps) {
  return {
    isMobileMenu: state.isMobileMenu
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setMobileMenu }, dispatch);
};

Navigation.propTypes = {
  isMobileMenu: PropTypes.bool,
  setMobileMenu: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
