import React from 'react';
import PropTypes from 'prop-types';

import InViewport from 'components/InViewport';

import './PortfolioItem.scss';

import PortfolioIcons from './PortfolioIcons';
import { IconDesktop } from 'components/Icon';

import Image from '../Image';

export const PortfolioItem = ({ thumb, title, description, tech, url }) => {
  const src = require(`${thumb}`);

  return (
    <div className="portfolio-item">
      <PortfolioIcons />
      <InViewport>
        <Image src={src} name={title} />
      </InViewport>

      <div className="portfolio-item__info">
        <h3 className="portfolio-item__title">{title}</h3>
        <p className="portfolio-item__description">{description}</p>
        <p className="portfolio-item__tech">{tech}</p>

        <div className="portfolio-item__more-info">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title="Visit website"
          >
            <IconDesktop size="xs" className="portfolio-item__icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

PortfolioItem.propTypes = {
  thumb: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PortfolioItem;
