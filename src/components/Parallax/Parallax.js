import React from 'react';
import { throttle } from 'lodash';
import inViewport from 'in-viewport';

import './Parallax.scss';

/* TODO
scroll up/down
props for parallax height, scroll speed
ability to blur parallax
convert hero to use this component
*/

const initialStyle = {
    position: 'absolute',
    top: '0%'
};

export class Parallax extends React.Component {
    constructor(props) {
		super(props);
       
        this.parallaxElement = React.createRef();
        this.parallaxImage = React.createRef();

        this.state = {
            imgStyle: initialStyle,
            initialPostion: 0,
            currentScrollPosition: window.pageYOffset || document.documentElement.scrollTop
        };
	}

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScrollParallax);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScrollParallax);
    }

    handleScrollParallax = throttle((e) => {
        const element = this.parallaxElement.current;
        const isInViewport = inViewport(element); 
        const isMaxScroll = this.checkMaxScroll();
        const isMinScroll = this.checkMinScroll();
        const scrollDirection = this.checkScrollDirection(e);

        // console.log('scrollDirection', scrollDirection);

        // const a = this.state.initialPostion * scrollDirection;

        // console.log('this.state.initialPostion', this.state.initialPostion);

        console.log('isInViewport', isInViewport);
        console.log('isMaxScroll', isMaxScroll);
        console.log('isMinScroll', isMinScroll);


        if(isInViewport && !isMaxScroll && !isMinScroll){
            const transform = `translate3d(0, ${this.state.initialPostion}px, 0)`;
            const newStyle = {
                ...initialStyle,
                transform
            };

            this.setState(prevState => ({
                imgStyle: newStyle,
                initialPostion: this.state.initialPostion + scrollDirection
            }));
        }
    }, 30)

    checkMaxScroll(){
        const { parallaxHeight, imgHeight, initialPostion } = this.state;
        const maxScroll = imgHeight - parallaxHeight;

        return initialPostion > maxScroll;
    }

    checkMinScroll(){
        const { initialPostion } = this.state;
        const minScroll = 0;

        console.log('initialPostion', initialPostion);
        // console.log('minScroll', minScroll);

        return initialPostion < minScroll;
    }

    checkScrollDirection(e){
        const { currentScrollPosition } = this.state;
        const newScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        // console.log('currentScrollPosition', currentScrollPosition);
        // console.log('newScrollPosition', newScrollPosition);

        this.setState(prevState => ({
            currentScrollPosition: newScrollPosition
        }));

        if(newScrollPosition > currentScrollPosition){
            return -2;
        } else {
            return +2;
        }
    }

    getImageDimensions = () => {
        this.setState(prevState => ({
            parallaxHeight: this.parallaxElement.current.getBoundingClientRect().height,
            imgHeight: this.parallaxImage.current.getBoundingClientRect().height
        }));
    }

    render() {
        const { image } = this.props;
        const { imgStyle } = this.state;

        return <div className="parallax" ref={this.parallaxElement}>
            <img className="parallax__image" src={image} alt="" style={imgStyle} ref={this.parallaxImage} onLoad={this.getImageDimensions} />
        </div>;
    }
}

export default Parallax;