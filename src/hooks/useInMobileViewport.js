import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

export const useInMobileViewport = () => {
  const [isMobileView, setIsMobileView] = useState(true);

  const checkInsideMobileView = () =>
    window.matchMedia('(max-width: 768px)').matches ||
    window.matchMedia('(max-width: 992px) and (orientation: landscape)')
      .matches;

  useEffect(() => {
    const onResize = debounce(() => {
      const isInsideMobileView = checkInsideMobileView();

      setIsMobileView(isInsideMobileView);
    });

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  });

  return isMobileView;
};

export default useInMobileViewport;
