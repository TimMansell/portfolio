import React from 'react';

import InViewport from '../inViewport/inViewport';
import {PortfolioItem} from './portfolioItem';
import {ShuffleCharacters} from '../shuffleCharacters/shuffleCharacters';

export class Portfolio extends React.Component {
    render() {
		const items = [
			{
				"title": "myBupa",
				"src": require('./my-bupa.jpg'),
				"thumb": require('./my-bupa-thb.jpg'),
				"description": "Responsive website rebuild.  Built on top of .NET stack.",
				"tech": "AngularJS, Bootstrap 3, SASS, ES6/Babel, and Webpack.",
				"url": "https://my.bupa.com.au"
			},
			{
				"title": "Captain's Choice",
				"src": require('./captains-choice.jpg'),
				"thumb": require('./captains-choice-thb.jpg'),
				"description": "Responsive website rebuild. Built on top of .NET stack.",
				"tech": "AngularJS, Bootstrap 3, SCSS/Compass, jQuery, Gulp, and Bower.",
				"url": "https://web.archive.org/web/20160228234736/http://www.captainschoice.com.au/"
			},
			{
				"title": "Tourism Victoria",
				"src": require('./visit-victoria.jpg'),
				"thumb": require('./visit-victoria-thb.jpg'),
				"description": "Responsive website rebuild.  Built on top of .NET stack.",
				"tech": "AngularJS, Bootstrap 3, SASS, Gulp, Bower, and jQuery.",
				"url": "http://visitvictoria.com/"
			},
			{
				"title": "UniSuper",
				"src": require('./unisuper-mobile-site.jpg'),
				"thumb": require('./unisuper-mobile-site-thb.jpg'),
				"description": "Dedicated mobile site build. Built on top of .NET stack.",
				"tech": "AngularJS, Bootstrap 3, SCSS/Compass, and jQuery.",
				"url": "http://m.unisuper.com.au/"
			},
			{
				"title": "Point & Claim",
				"src": require('./point-and-claim.jpg'),
				"thumb": require('./point-and-claim-thb.jpg'),
				"description": "Responsive website rebuild. Built on top of CodeIgnitor framework.",
				"tech": "AngularJS, Bootstrap 3, SCSS/Compass, jQuery, and Gulp.",
				"url": "https://web.archive.org/web/20160622073557/http://pointandclaim.com/"
			},
			{
				"title": "Simply Great Meals",
				"src": require('./simply-great-meals.jpg'),
				"thumb": require('./simply-great-meals-thb.jpg'),
				"description": "Responsive website rebuild focusing on mobile and tablet devices. Built on top of .NET stack.",
				"tech": "Backbone, SCSS, and jQuery.",
				"url": "http://simplygreatmeals.com.au/"
			}
		];

		let listItems = items.map((item, i) =>
			<div className="col-12 col-sm-6 col-lg-4" key={i}>
		 		<PortfolioItem data={item} />
			</div>
		);

        return <section id="portfolio" className="layout-section bg--secondary">
			<div className="container container-large">
				<div className="row text--center">
					<div className="col-12">
						<div className="heading text--tertiary">
							<InViewport>
								<ShuffleCharacters>
								<h2 className="heading__title text--center">Portfolio</h2>
								</ShuffleCharacters>
							</InViewport>
							<p className="heading__description">Here's a sample of my work</p>
						</div>
					</div>
				</div>

				<div className="row">
				{listItems}	
				</div>
				
			</div>
		</section>;
    }
}