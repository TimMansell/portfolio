import React from 'react';

import Header from 'components/Header';
import PortfolioItem from './PortfolioItem';

import styles from './Portfolio.module.scss';
import portfolioJson from './json/portfolio.json';

export const Portfolio = () => {
  const listItems = portfolioJson.map((item, i) => (
    <PortfolioItem {...item} key={i} />
  ));

  return (
    <>
      <Header
        title="Portfolio"
        text="Here's a sample of my work. Hover over image for more information"
        tertiary
      />

      <div className={styles.portfolio}>{listItems}</div>
    </>
  );
};

export default Portfolio;
