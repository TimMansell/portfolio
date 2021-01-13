import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';

export const ScrollFade = (fadeMultiplier) => {
  const [styles, setStyles] = useState({});

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

  // return <div style={styles}>{children}</div>;
  return styles;
};

// ScrollFade.propTypes = {
//   fadeMultiplier: PropTypes.number.isRequired,
//   children: PropTypes.node.isRequired,
// };

export default ScrollFade;
