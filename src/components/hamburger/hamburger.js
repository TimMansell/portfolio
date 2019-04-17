import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';

import * as actions from '../../actions';

export class Hamburger extends React.Component {
  toggleHamburger = () => { 
    const { isMobileMenu } = this.props;

    this.props.actions.setMobileMenu(!isMobileMenu);
  }

  render() {
    const { isMobileMenu } = this.props;

    let classes = classnames('hamburger', {
      'hamburger--active': isMobileMenu
    });
    
    return <button type="button" className={classes} onClick={this.toggleHamburger}>
      <span className="hamburger__menu">toggle menu</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
