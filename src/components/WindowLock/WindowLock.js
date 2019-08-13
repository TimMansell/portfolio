import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScrollLock from 'react-scrolllock';

import * as actions from 'actions';

import debounce from 'lodash.debounce';

export class WindowLock extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isMobileView: this.isInsideMobileView()
		};		
	}

	componentDidMount() {
    	window.addEventListener('resize', debounce(this.handleResize));
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}

	handleResize = (event) => {
		const isInsideMobileView = this.isInsideMobileView();

		this.setState(prevState => ({
			isMobileView: isInsideMobileView
		}));
	}

	isInsideMobileView(){
		return window.matchMedia("(max-width: 768px)").matches;
	}

	render() {
		const { isMobileMenu } = this.props;
		const { isMobileView } = this.state;

		return <>{isMobileMenu && isMobileView && <ScrollLock />}</>;
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

WindowLock.propTypes = {
	isMobileMenu: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(WindowLock);


