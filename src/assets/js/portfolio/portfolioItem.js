import React from 'react';

export class PortfolioItem extends React.Component {
    render() {
        return <div className="portfolio-item">
            <img className="portfolio-item__img img--responsive b-lazy" src={this.props.data.thumb} alt={this.props.data.title} />
            <div className="portfolio-item__info text--center">
                <h3 className="portfolio-item__title">{this.props.data.title}</h3>
                <p className="portfolio-item__description hidden-sm-up">{this.props.data.description}</p>
                <p className="portfolio-item__description portfolio-item__tech">{this.props.data.tech}</p>

                <div className="portfolio-item__more-info">
                    <a href={this.props.data.url} target="_blank" title="Visit website">
                        <i className="fa fa-globe portfolio-item__icon"></i>
                    </a>
                </div>
            </div>
        </div>;
    }
}