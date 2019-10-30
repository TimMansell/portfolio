import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';

import { setMobileMenu } from 'actions';

import './Hamburger.scss';

export class Hamburger extends React.Component {
  toggleHamburger = () => {
    const { isMobileMenu, setMobileMenu } = this.props;

    setMobileMenu(!isMobileMenu);
  }

  render () {
    const { isMobileMenu } = this.props;

    const buttonClasses = classnames('hamburger', {
      'hamburger--active': isMobileMenu
    });

    const hamburgerClasses = classnames('hamburger__menu', {
      'hamburger__menu--active': isMobileMenu
    });

    return <button type="button" data-e2e="hambuger" className={buttonClasses} onClick={this.toggleHamburger}>
      <span className={hamburgerClasses}>toggle menu</span>
    </button>;
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

Hamburger.propTypes = {
  isMobileMenu: PropTypes.bool,
  setMobileMenu: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
