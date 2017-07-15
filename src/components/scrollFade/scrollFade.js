import React from 'react';

import { throttle } from 'lodash';

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
        let opacity = 1 - (window.scrollY / window.innerHeight) * this.props.fadeMultiplier;

        let styles = {
            opacity: opacity
        };

        if (opacity >= 0){
            this.setState(prevState => ({    
                styles: styles
            }));
        }
    }, 30)

    render() {
        return <div style={this.state.styles}>{this.props.children}</div>;
    }
}