import React from 'react';
import PropTypes from 'prop-types';
import inViewport from 'in-viewport';

import shuffleLetters from 'shuffle-letters';

export class ShuffleCharacters extends React.Component {
  constructor (props) {
    super(props);

    this.refShuffle = React.createRef();
  }

  componentDidMount () {
    const element = this.refShuffle.current;

    inViewport(element, this.shuffle);
  }

  shuffle = () => {
    shuffleLetters(this.refShuffle.current.children);
  }

  render () {
    const { children } = this.props;

    return <div ref={this.refShuffle}>{children}</div>;
  }
}

ShuffleCharacters.propTypes = {
  children: PropTypes.node.isRequired
};

export default ShuffleCharacters;
