import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScrollLock from 'react-scrolllock';

import * as actions from '../../../actions';

import debounce from 'lodash/debounce';

class WindowLock extends React.Component {
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
		let isInsideMobileView = this.isInsideMobileView();

		this.setState(prevState => ({
			isMobileView: isInsideMobileView
		}));
	}

	isInsideMobileView(){
		return window.matchMedia("(max-width: 768px)").matches;
	}

    render() {
        return <div>{this.props.isMobileMenu && this.state.isMobileView && <ScrollLock />}</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(WindowLock);


