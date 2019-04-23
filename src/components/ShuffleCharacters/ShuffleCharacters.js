import React from 'react';
import PropTypes from 'prop-types';
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
        const { children } = this.props;

        return <div>{children}</div>;
    }
}

ShuffleCharacters.propTypes = {
	children: PropTypes.node.isRequired
};


export default ShuffleCharacters;