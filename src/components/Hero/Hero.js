import React from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';

import './Hero.scss';

export class Hero extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            styles: {}
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = throttle((e) => {
        const { blurFrom, blurTo } = this.props;
        
        const blur = blurFrom + ( (blurTo - blurFrom) * (window.scrollY / window.innerHeight));
        const blurCss = (blur <= blurTo) ? {'filter': 'blur('+blur+'px)'} : {};

        this.setState(prevState => ({    
            styles: blurCss
        }));
    }, 30)

    render() {
        return <div className="hero__img" style={this.state.styles}></div>;
    }
}

Hero.propTypes = {
    blurFrom: PropTypes.number.isRequired,
    blurTo: PropTypes.number.isRequired
};

export default Hero;