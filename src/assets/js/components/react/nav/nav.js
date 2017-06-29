import React from 'react';
import ReactDOM from 'react-dom';

import debounce from 'lodash/debounce';
import classnames from 'classnames';

export class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isFixedNav: false
		};

		// this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
    	window.addEventListener('scroll', debounce(this.handleScroll));

		this.setState(prevState => ({
			offset: this.textInput.offsetTop
		}));
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = (event) => {
		let scrollTop = event.srcElement.body.scrollTop,
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

    render() {
		let classes = classnames('navigation', {'navigation__menu-is-sticky': this.state.isFixedNav});

        return <nav id="nav" className={classes} ref={(input) => { this.textInput = input; }}>
			<ul className="navigation__menu">
				<li className="navigation__menu-item">
					<a className="navigation__menu-link">Profile</a></li>
				<li className="navigation__menu-item">
					<a className="navigation__menu-link">Skills</a></li>
				<li className="navigation__menu-item">
					<a className="navigation__menu-link">Portfolio</a></li>
				<li className="navigation__menu-item">
					<a className="navigation__menu-link">Presentations</a></li>
				<li className="navigation__menu-item">
					<a className="navigation__menu-link">Testimonials</a></li>
				<li className="navigation__menu-item">
					<a className="navigation__menu-link">Contact</a></li>
			</ul>

			<button className="hamburger hidden-lg-up">
				<span className="hamburger__menu">toggle menu</span>
			</button>
		</nav>;
    }
}