import React from 'react';


import { throttle } from 'lodash';

export class Hero extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blurFrom: props.blurFrom, 
            blurTo: props.blurTo
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = throttle((e) => {
        let blur = this.props.blurFrom + ( (this.props.blurTo - this.props.blurFrom) * (window.scrollY / window.innerHeight));

        let blurCss;

        if(blur <= this.props.blurTo){
            // element.css({
            //   '-webkit-filter': 'blur('+blur+'px)',
            //   'filter': 'blur('+blur+'px)'
            // });

            blurCss = {
                'filter': 'blur('+blur+'px)'
            };
        }

        

        // console.log('win', window);

        this.setState(prevState => ({    
            styles: blurCss
        }));
    }, 30)

    render() {
        return <div className="hero__img" style={this.state.styles}></div>;
    }
}

export default Hero;