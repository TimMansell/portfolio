import React from 'react';
import PropTypes from 'prop-types';

import shuffleLetters from 'shuffle-letters';

export class ShuffleCharacters extends React.Component {
  constructor (props) {
    super(props);

    this.refShuffle = React.createRef();
  }

  componentDidMount () {
    this.shuffle();
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
