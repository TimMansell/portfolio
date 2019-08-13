import React from 'react';

import Header from 'components/Header';
import PortfolioItem from './PortfolioItem';

import './Portfolio.scss';
import portfolioJson from './json/portfolio.json';

export const Portfolio = () => {
	const listItems = portfolioJson.map((item, i) =>
		<PortfolioItem {...item} key={i} />
	);

	return <>
		<Header title="Portfolio" text="Here's a sample of my work" tertiary />

		<div className="portfolio">
			{listItems}	
		</div>
	</>;
}

export default Portfolio;