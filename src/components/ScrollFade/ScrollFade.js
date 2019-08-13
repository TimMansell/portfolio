import React from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';

export class ScrollFade extends React.Component {
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
        const { fadeMultiplier } = this.props;
        const { scrollY, innerHeight } = window;

        const opacity = 1 - (scrollY / innerHeight) * fadeMultiplier;

        const styles = {
            opacity: opacity
        };

        if (opacity >= 0){
            this.setState(prevState => ({    
                styles: styles
            }));
        }
    }, 30)

    render() {
        const { children } = this.props;
        const { styles } = this.state;

        return <div style={styles}>{children}</div>;
    }
}

ScrollFade.propTypes = {
    fadeMultiplier: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired
};

export default ScrollFade;