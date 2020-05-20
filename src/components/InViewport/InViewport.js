import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import inViewport from 'in-viewport';

export const InViewport = ({ children }) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const refInViewport = useRef(null);

  useEffect(() => {
    const isVisible = () => {
      setIsInViewport(true);
    }

    inViewport(refInViewport.current, isVisible);
  });

  return <div ref={refInViewport}>
    {!isInViewport && <span>&nbsp;</span> }
    {isInViewport && <span>{children}</span>}
  </div>;
};

InViewport.propTypes = {
  children: PropTypes.node.isRequired
};

export default InViewport;
