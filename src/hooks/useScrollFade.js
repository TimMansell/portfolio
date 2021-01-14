import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

export const useScrollFade = (fadeMultiplier) => {
  const [styles, setStyles] = useState({ opacity: 1 });

  useEffect(() => {
    const onScroll = throttle(() => {
      const { scrollY, innerHeight } = window;

      const opacity = 1 - (scrollY / innerHeight) * fadeMultiplier;

      const styles = {
        opacity: opacity,
      };

      if (opacity >= 0) {
        setStyles(styles);
      }
    }, 30);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  });

  return styles;
};

export default useScrollFade;
