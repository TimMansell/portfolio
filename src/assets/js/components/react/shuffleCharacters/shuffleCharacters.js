import React from 'react';
import ReactDOM from 'react-dom';

import { throttle } from 'lodash';
import inViewport from 'in-viewport';
import shuffleLetters from 'shuffle-letters';

export class ShuffleCharacters extends React.Component {
    componentDidMount() {

        // Find DOM element so we can work out when it's visible on page.
        this.element = ReactDOM.findDOMNode(this).children;

        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = throttle((e) => {

        // When element is in viewport then shuffle letters.
      if(inViewport(this.element[0])){
        shuffleLetters(ReactDOM.findDOMNode(this).children);

        // We've shuffled once so remove event listener.
        window.removeEventListener('scroll', this.handleScroll);
      }

    }, 30)

    render() {
        return <div>{this.props.children}</div>;
    }
}