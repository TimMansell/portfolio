import React from 'react';

import Header from '../Header';
import PortfolioItem from './PortfolioItem';

export const Portfolio = () => {
	const items = [
		{
			"title": "myBupa",
			"src": require('./img/my-bupa.jpg'),
			"thumb": require('./img/my-bupa-thb.jpg'),
			"description": "Responsive website rebuild.  Built on top of .NET stack.",
			"tech": "AngularJS, Bootstrap 3, SASS, ES6/Babel, and Webpack.",
			"url": "https://my.bupa.com.au"
		},
		{
			"title": "Captain's Choice",
			"src": require('./img/captains-choice.jpg'),
			"thumb": require('./img/captains-choice-thb.jpg'),
			"description": "Responsive website rebuild. Built on top of .NET stack.",
			"tech": "AngularJS, Bootstrap 3, SCSS/Compass, jQuery, Gulp, and Bower.",
			"url": "https://web.archive.org/web/20160228234736/http://www.captainschoice.com.au/"
		},
		{
			"title": "Tourism Victoria",
			"src": require('./img/visit-victoria.jpg'),
			"thumb": require('./img/visit-victoria-thb.jpg'),
			"description": "Responsive website rebuild.  Built on top of .NET stack.",
			"tech": "AngularJS, Bootstrap 3, SASS, Gulp, Bower, and jQuery.",
			"url": "http://visitvictoria.com/"
		},
		{
			"title": "UniSuper",
			"src": require('./img/unisuper-mobile-site.jpg'),
			"thumb": require('./img/unisuper-mobile-site-thb.jpg'),
			"description": "Dedicated mobile site build. Built on top of .NET stack.",
			"tech": "AngularJS, Bootstrap 3, SCSS/Compass, and jQuery.",
			"url": "http://m.unisuper.com.au/"
		},
		{
			"title": "Point & Claim",
			"src": require('./img/point-and-claim.jpg'),
			"thumb": require('./img/point-and-claim-thb.jpg'),
			"description": "Responsive website rebuild. Built on top of CodeIgnitor framework.",
			"tech": "AngularJS, Bootstrap 3, SCSS/Compass, jQuery, and Gulp.",
			"url": "https://web.archive.org/web/20160622073557/http://pointandclaim.com/"
		},
		{
			"title": "Simply Great Meals",
			"src": require('./img/simply-great-meals.jpg'),
			"thumb": require('./img/simply-great-meals-thb.jpg'),
			"description": "Responsive website rebuild focusing on mobile and tablet devices. Built on top of .NET stack.",
			"tech": "Backbone, SCSS, and jQuery.",
			"url": "http://simplygreatmeals.com.au/"
		}
	];

	let listItems = items.map((item, i) =>
		<PortfolioItem data={item} key={i} />
	);

	return <>
		<Header title="Portfolio" text="Here's a sample of my work" tertiary />

		<div className="portfolio">
			{listItems}	
		</div>
	</>;
}

export default Portfolio;