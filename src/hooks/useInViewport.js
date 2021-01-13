import { useState, useEffect } from 'react';
import inViewport from 'in-viewport';

export const InViewport = (element) => {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const isVisible = () => setIsInViewport(true);

    inViewport(element.current, isVisible);
  });

  return isInViewport;
};

export default InViewport;
