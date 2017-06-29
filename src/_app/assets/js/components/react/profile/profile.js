import React from 'react';
import ReactDOM from 'react-dom';

import {SocialIcons} from '../socialIcons/socialIcons';

export class Profile extends React.Component {
    render() {
        return <section id="profile" className="layout-section bg--tertiary scrollto">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="heading">
							<h2 className="heading__title heading--primary text--center" tm-shuffle-on-screen>A little bit about myself</h2>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-12 text--center">
						<p>I am an experienced and ambitious Front-end Developer with over 9 years commercial experience in a digital agency environment. I specialise in HTML5, CSS3, SCSS, AngularJS, NodeJS, Yarn, Gulp, and Webpack.</p>

						<p>I develop with best practices in mind and adhere to W3C standards. Unfortunately not all browsers are created equal, so I utilise Progressive Enhancement where possible, to ensure that any website I work on displays perfectly in all of the evergreen browsers.</p>

						<p>I believe that having a functional website is only part of the solution. Being found is just as important. Accessibility (a11y) and Search Engine Optimisation (SEO) is an integral part of my development process.</p>

						<p>Please view my <a className="link" href="#portfolio" du-smooth-scroll>portfolio</a> to see some examples of my work.</p>
					</div>
				</div>

				<SocialIcons />
			</div>
		</section>;
    }
}