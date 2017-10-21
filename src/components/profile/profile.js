import React from 'react';
import { Link } from 'react-scroll';

import InViewport from '../inViewport/inViewport';
import {SocialIcons} from '../socialIcons/socialIcons';
import {ShuffleCharacters} from '../shuffleCharacters/shuffleCharacters';

export class Profile extends React.Component {
    render() {
        return <section id="profile" className="layout-section bg--tertiary scrollto">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="heading">
							<InViewport>
								<ShuffleCharacters>
									<h2 className="heading__title heading--primary text--center">A little bit about myself</h2>
								</ShuffleCharacters>
							</InViewport>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-12 text--center">
						<p>I am an experienced and ambitious Front-end Developer with over 8 years commercial experience in a digital agency environment. The last two years I have worked client-side. I specialise in HTML5, CSS3, SCSS, React, AngularJS, NodeJS, Yarn, Gulp, and Webpack.</p>

						<p>I develop with best practices in mind and adhere to W3C standards. Unfortunately not all browsers are created equal, so I utilise Progressive Enhancement where possible, to ensure that any website I work on displays perfectly in all of the evergreen browsers.</p>

						<p>I believe that having a functional website is only part of the solution. Being found is just as important. Accessibility (a11y) and Search Engine Optimisation (SEO) is an integral part of my development process.</p>

						<p>Please view my  <Link className="link" to="portfolio" smooth={true}>portfolio</Link> to see some examples of my work.</p>
					</div>
				</div>

				<SocialIcons />
			</div>
		</section>;
    }
}