import React from 'react';
import ReactDOM from 'react-dom';

import {PortfolioItem} from './portfolioItem';



export class Portfolio extends React.Component {
    render() {
		let numbers = [
			{
				"id": 1,
				"title": "Captain's Choice",
				"src": "assets/img/portfolio/captains-choice.jpg",
				"thumb": "assets/img/portfolio/captains-choice-thb.jpg",
				"description": "Responsive website rebuild. Built on top of .NET stack.",
				"tech": "AngularJS, Bootstrap 3, SCSS/Compass, jQuery, Gulp, and Bower.",
				"url": "http://www.captainschoice.com.au/"
			},
			{
				"id": 2,
				"title": "Tourism Victoria - Mobile site",
				"src": "assets/img/portfolio/tourism-victoria-mobile-site.jpg",
				"thumb": "assets/img/portfolio/tourism-victoria-mobile-site-thb.jpg",
				"description": "Dedicated mobile site build. Built on top of .NET stack.",
				"tech": "AngularJS, Bootstrap 2, LESS, and jQuery.",
				"url": "http://m.visitvictoria.com/"
			},
			{
				"id": 3,
				"title": "UniSuper",
				"src": "assets/img/portfolio/unisuper-mobile-site.jpg",
				"thumb": "assets/img/portfolio/unisuper-mobile-site-thb.jpg",
				"description": "Dedicated mobile site build. Built on top of .NET stack.",
				"tech": "AngularJS, Bootstrap 3, SCSS/Compass, and jQuery.",
				"url": "http://m.unisuper.com.au/"
			},
			{
				"id": 4,
				"title": "Point & Claim",
				"src": "assets/img/portfolio/point-and-claim.jpg",
				"thumb": "assets/img/portfolio/point-and-claim-thb.jpg",
				"description": "Responsive website rebuild. Built on top of CodeIgnitor framework.",
				"tech": "AngularJS, Bootstrap 3, SCSS/Compass, jQuery, and Gulp.",
				"url": "http://pointandclaim.com/"
			},
			{
				"id": 5,
				"title": "Tourism Victoria",
				"src": "assets/img/portfolio/visit-victoria.jpg",
				"thumb": "assets/img/portfolio/visit-victoria-thb.jpg",
				"description": "Responsive website rebuild.  Built on top of .NET stack.",
				"tech": "AngularJS, Bootstrap 3, SASS, Gulp, Bower, and jQuery.",
				"url": "http://visitvictoria.com/"
			},
			{
				"id": 6,
				"title": "Simply Great Meals",
				"src": "assets/img/portfolio/simply-great-meals.jpg",
				"thumb": "assets/img/portfolio/simply-great-meals-thb.jpg",
				"description": "Responsive website rebuild focusing on mobile and tablet devices. Built on top of .NET stack.",
				"tech": "Backbone, SCSS, and jQuery.",
				"url": "http://simplygreatmeals.com.au/"
			}
		];

		let listItems = numbers.map((number) =>
			<div className="col-12 col-sm-6 col-lg-4" key={number.id}>
		 		<PortfolioItem data={number} />
			</div>
		);

        return <section id="portfolio" className="layout-section bg--secondary">
			<div className="container container-large">
				<div className="row text--center">
					<div className="col-12">
						<div className="heading text--tertiary">
							<h2 className="heading__title text--center" tm-shuffle-on-screen>Portfolio</h2>
							<p className="heading__description">Here's a sample of my lastest work</p>
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