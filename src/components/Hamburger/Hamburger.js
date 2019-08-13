import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';

import * as actions from 'actions';

import './Hamburger.scss';

export class Hamburger extends React.Component {
  toggleHamburger = () => { 
    const { isMobileMenu } = this.props;

    this.props.actions.setMobileMenu(!isMobileMenu);
  }

  render() {
    const { isMobileMenu } = this.props;

    const buttonClasses = classnames('hamburger', {
      'hamburger--active': isMobileMenu
    });

    const hamburgerClasses = classnames('hamburger__menu', {
      'hamburger__menu--active': isMobileMenu
    });
    
    return <button type="button" className={buttonClasses} onClick={this.toggleHamburger}>
      <span className={hamburgerClasses}>toggle menu</span>
    </button>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isMobileMenu: state.isMobileMenu
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

Hamburger.propTypes = {
	isMobileMenu: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
