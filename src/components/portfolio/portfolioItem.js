import React from 'react';
import InViewport from '../inViewport/inViewport';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faDesktop);

export class PortfolioItem extends React.Component {
    render() {
        return <div className="portfolio-item">
            <InViewport><img className="portfolio-item__img img--responsive" src={this.props.data.thumb} alt={this.props.data.title} /></InViewport>
            <div className="portfolio-item__info text--center">
                <h3 className="portfolio-item__title">{this.props.data.title}</h3>
                <p className="portfolio-item__description d-none d-md-block">{this.props.data.description}</p>
                <p className="portfolio-item__description portfolio-item__tech">{this.props.data.tech}</p>

                <div className="portfolio-item__more-info">
                    <a href={this.props.data.url} target="_blank" rel="noopener noreferrer" title="Visit website">
                    <FontAwesomeIcon icon={faDesktop} className="portfolio-item__icon" />
                    </a>
                </div>
            </div>
        </div>;
    }
}