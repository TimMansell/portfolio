import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const formatBlur = (value) => ({ filter: `blur(${parseInt(value, 10)}px)` });

export const useScrollBlur = (blurFrom, blurTo) => {
  const intialBlur = formatBlur(blurFrom);
  const [styles, setStyles] = useState(intialBlur);

  useEffect(() => {
    const onScroll = throttle(() => {
      const { scrollY, innerHeight } = window;

      const blur = blurFrom + (blurTo - blurFrom) * (scrollY / innerHeight);

      const finalBlur = formatBlur(blur);

      const blurCss = blur <= blurTo ? finalBlur : intialBlur;

      setStyles(blurCss);
    }, 30);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  });

  return styles;
};

export default useScrollBlur;
