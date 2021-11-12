import { useState, useEffect } from 'react';

export const useIntersectionObserver = (element, { offset = 0 }) => {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0) {
          setIsInViewport(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: `0px 0px ${offset}px 0px`,
        threshold: 1,
      }
    );

    observer.observe(element.current);
  }, [element, offset]);

  return isInViewport;
};

export default useIntersectionObserver;
