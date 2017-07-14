import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';

import * as actions from '../../../actions';

class Hamburger extends React.Component {
    handleClick = () => {
        console.log('clck');
        this.props.actions.setMobileMenu(!this.props.isMobileMenu);
    }
	
    render() {
        let classes = classnames('hamburger hidden-lg-up', {
			'hamburger--active': this.props.isMobileMenu
		});

        return <button className={classes} onClick={this.handleClick}>
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
