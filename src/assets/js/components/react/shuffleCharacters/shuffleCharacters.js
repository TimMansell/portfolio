import React from 'react';
import ReactDOM from 'react-dom';

import { throttle } from 'lodash';
import inViewport from 'in-viewport';
import shuffleLetters from 'shuffle-letters';

export class ShuffleCharacters extends React.Component {
    constructor(props) {
		super(props);

        this.inViewport = this.props.inViewport;

        this.state = {
            content: this.props.children
        };
	}

    componentDidMount() {

        if(this.inViewport){
            // Find DOM element so we can work out when it's visible on page.
            this.element = ReactDOM.findDOMNode(this).children;

            window.addEventListener('scroll', this.handleScroll);
        } else {
            this.shuffle();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    componentWillReceiveProps(nextProps){
        // console.log('update', ReactDOM.findDOMNode(this).children);

        this.setState(prevState => ({
            content: nextProps.children
        }));

        // this.shuffle();
    }

    componentWillUpdate(){
        console.log('shuffle');
        this.shuffle();
    }

    handleScroll = throttle((e) => {

        // When element is in viewport then shuffle letters.
      if(inViewport(this.element[0])){
        // shuffleLetters(ReactDOM.findDOMNode(this).children);
        this.shuffle();

        // We've shuffled once so remove event listener.
        window.removeEventListener('scroll', this.handleScroll);
      }

    }, 30)

    shuffle = () => {
        // console.log('ReactDOM.findDOMNode(this).children', ReactDOM.findDOMNode(this).children);
        shuffleLetters(ReactDOM.findDOMNode(this).children);
    }

    render() {
        return <div>{this.state.content}</div>;
    }
}