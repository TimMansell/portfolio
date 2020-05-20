import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const ShuffleContent = ({ children }) => {
  const [shuffleContent, setShuffleContent] = useState(React.Children.toArray(children));
  const [content, setContent] = useState(shuffleContent[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      const shuffledContent = [
        ...shuffleContent.slice(1),
        ...shuffleContent.slice(0, 1)
      ];

      setShuffleContent(shuffledContent);
      setContent(shuffledContent[0]);
    }, 4000);

    return () => clearInterval(timer);
  });

  return <div>{content}</div>;
};

ShuffleContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default ShuffleContent;
