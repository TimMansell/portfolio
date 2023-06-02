import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const formatOpacity = (value) => ({ opacity: value.toFixed(2) });

export const useScrollFade = (fadeMultiplier) => {
  const intialOpacity = formatOpacity(1);
  const [styles, setStyles] = useState(intialOpacity);

  useEffect(() => {
    const onScroll = throttle(() => {
      const { scrollY, innerHeight } = window;

      const opacity = 1 - (scrollY / innerHeight) * fadeMultiplier;

      const opacityCss = formatOpacity(opacity);

      if (opacity >= 0) {
        setStyles(opacityCss);
      }
    }, 30);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [fadeMultiplier]);

  return styles;
};

export default useScrollFade;
