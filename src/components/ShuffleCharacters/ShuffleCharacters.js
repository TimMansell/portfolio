import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import inViewport from 'in-viewport';

import shuffleLetters from 'shuffle-letters';

export const ShuffleCharacters = ({ children }) => {
  const refShuffle = useRef(null);

  useEffect(() => {
    const shuffle = () => {
      shuffleLetters(refShuffle.current.children);
    };

    inViewport(refShuffle.current, shuffle);
  });

  return <div ref={refShuffle}>{children}</div>;
};

ShuffleCharacters.propTypes = {
  children: PropTypes.node.isRequired
};

export default ShuffleCharacters;
