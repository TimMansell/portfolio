import React from 'react';
import PropTypes from 'prop-types';

import InViewport from 'components/InViewport';

import styles from './PortfolioItem.module.scss';

import PortfolioIcons from './PortfolioIcons';
import { IconDesktop } from 'components/Icon';

import Image from '../Image';

export const PortfolioItem = ({ thumb, title, description, tech, url }) => {
  const srcs = [
    {
      type: 'avif',
      src: require(`./img/${thumb}.avif`),
    },
    {
      type: 'webp',
      src: require(`./img/${thumb}.webp`),
    },
  ];

  const fallback = require(`./img/${thumb}.jpg`);

  return (
    <div className={styles.portfolioItem}>
      <PortfolioIcons />
      <InViewport>
        <Image srcs={srcs} name={title} fallback={fallback} />
      </InViewport>

      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.tech}>{tech}</p>

        <div className={styles.moreinfo}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title="Visit website"
          >
            <IconDesktop size="xs" className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;

PortfolioItem.propTypes = {
  thumb: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.string,
  url: PropTypes.string.isRequired,
};
