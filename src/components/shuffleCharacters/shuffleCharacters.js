import React from 'react';
import ReactDOM from 'react-dom';

import shuffleLetters from 'shuffle-letters';

export class ShuffleCharacters extends React.Component {
    componentDidMount() {
        this.shuffle();
    }

    shuffle = () => {
        shuffleLetters(ReactDOM.findDOMNode(this).children);
    }

    render() {
        return <div>{this.props.children}</div>;
    }
}

export default ShuffleCharacters