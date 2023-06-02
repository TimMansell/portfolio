import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const formatBlur = (value) => ({
  backdropFilter: `blur(${parseInt(value, 10)}px)`,
});

export const useScrollBlur = (blurFrom, blurTo) => {
  const intialBlur = formatBlur(blurFrom);
  const [styles, setStyles] = useState(intialBlur);

  useEffect(() => {
    const onScroll = throttle(() => {
      const { scrollY, innerHeight } = window;

      const blur = blurFrom + (blurTo - blurFrom) * (scrollY / innerHeight);

      const blurCss = formatBlur(blur);

      if (blur < blurTo) {
        setStyles(blurCss);
      }
    }, 30);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [blurFrom, blurTo, intialBlur]);

  return styles;
};

export default useScrollBlur;
