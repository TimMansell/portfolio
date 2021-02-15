import { useState, useEffect } from 'react';
import inViewport from 'in-viewport';

export const useInViewport = (element, offset = 0) => {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const isVisible = () => setIsInViewport(true);

    inViewport(element.current, { offset }, isVisible);
  });

  return isInViewport;
};

export default useInViewport;
