import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions';

import classnames from 'classnames';
import { Link } from 'react-scroll';

import Hamburger from '../hamburger/hamburger';

export class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isFixedNav: false
		};
	}

	componentDidMount() {
    	window.addEventListener('scroll', this.handleScroll);

		this.setState(prevState => ({
			offset: this.textInput.offsetTop
		}));
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = (event) => {
		let scrollTop = window.scrollY || document.documentElement.scrollTop,
			isFixedNav = false;

		if(scrollTop >= this.state.offset){
			isFixedNav = true;
		} else {
			isFixedNav = false;
		}

		this.setState(prevState => ({
			isFixedNav: isFixedNav
		}));
	}

	closeMenu = () => {
		this.props.actions.setMobileMenu(false);
	}

	render() {
		const { isMobileMenu } = this.props;

		let navClasses = classnames('navigation', {
			'navigation__menu-is-sticky': this.state.isFixedNav && !isMobileMenu,
			'navigation__active': isMobileMenu
		});

		let menuClasses = classnames('navigation__menu', {
			'navigation__menu-active': isMobileMenu
		});

        return <nav id="nav" className={navClasses} ref={(input) => { this.textInput = input; }}>
			<ul className={menuClasses}>
				<li className="navigation__menu-item">
					<Link className="navigation__menu-link" activeClass="active" to="profile" smooth={true} spy={true} duration={500} onClick={this.closeMenu}>Profile</Link>
				</li>
				<li className="navigation__menu-item">
					<Link className="navigation__menu-link" activeClass="active" to="skills" smooth={true} spy={true} duration={500} onClick={this.closeMenu}>Skills</Link>
				</li>
				<li className="navigation__menu-item">
					<Link className="navigation__menu-link" activeClass="active" to="retired-skills" smooth={true} spy={true} duration={500} onClick={this.closeMenu}>Retired Skills</Link>
				</li>
				<li className="navigation__menu-item">
					<Link className="navigation__menu-link" activeClass="active" to="stack" smooth={true} spy={true} duration={500} onClick={this.closeMenu}>Stack</Link>
				</li>
				<li className="navigation__menu-item">
					<Link className="navigation__menu-link" activeClass="active" to="portfolio" smooth={true} spy={true} duration={500} onClick={this.closeMenu}>Portfolio</Link>
				</li>
				<li className="navigation__menu-item">
					<Link className="navigation__menu-link" activeClass="active" to="presentations" smooth={true} spy={true} duration={500} onClick={this.closeMenu}>Presentations</Link>
				</li>
				<li className="navigation__menu-item">
					<Link className="navigation__menu-link" activeClass="active" to="testimonials" smooth={true} spy={true} duration={500} onClick={this.closeMenu}>Testimonials</Link>
				</li>
				<li className="navigation__menu-item">
					<Link className="navigation__menu-link" activeClass="active" to="contact" smooth={true} spy={true} duration={500} onClick={this.closeMenu}>Contact</Link>
				</li>
			</ul>

			<Hamburger />
		</nav>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
