import React from 'react';
import ReactDOM from 'react-dom';

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

    handleScroll = (e) => {
    //     let blur = blurFrom + ( (blurTo - blurFrom) * ($window.scrollTop() / $window.height()));

    //   if(blur <= blurTo){
    //     element.css({
    //       '-webkit-filter': 'blur('+blur+'px)',
    //       'filter': 'blur('+blur+'px)'
    //     });
    //   }

        console.log('win', window);
    }

    render() {
        return <div className="hero__img"></div>;
    }
}