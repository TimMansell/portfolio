import { useState, useEffect } from 'react';
import inViewport from 'in-viewport';

export const InViewport = ({ current }) => {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const isVisible = () => setIsInViewport(true);

    inViewport(current, isVisible);
  });

  return isInViewport;
};

export default InViewport;
