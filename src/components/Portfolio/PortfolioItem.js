import React from 'react';
import PropTypes from 'prop-types';

import InViewport from '../InViewport';

import './PortfolioItem.scss';

import PortfolioIcons from './PortfolioIcons';
import { IconDesktop } from '../Icon';

export const PortfolioItem = ({data}) => {
    return <div className="portfolio-item">
        <PortfolioIcons />
        <InViewport>
            <img className="img--responsive" src={require(`${data.thumb}`)} alt={data.title} />
        </InViewport>
        
        <div className="portfolio-item__info">
            <h3 className="portfolio-item__title">{data.title}</h3>
            <p className="portfolio-item__description">{data.description}</p>
            <p className="portfolio-item__tech">{data.tech}</p>

            <div className="portfolio-item__more-info">
                <a href={data.url} target="_blank" rel="noopener noreferrer" title="Visit website">
                    <IconDesktop size="xs" className="portfolio-item__icon" />
                </a>
            </div>
        </div>
    </div>;
}

PortfolioItem.propTypes = {
	data: PropTypes.object.isRequired
};

export default PortfolioItem;