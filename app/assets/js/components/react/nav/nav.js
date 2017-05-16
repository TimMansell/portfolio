import React from 'react';
import ReactDOM from 'react-dom';

// import format from 'date-fns/format';

export class Navigation extends React.Component {
    render() {
        return <nav id="nav" className="navigation">
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