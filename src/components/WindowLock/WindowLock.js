import React, { useState, useEffect, useContext } from 'react';
import { MenuContext } from '../../context/mobileMenu';
import ScrollLock from 'react-scrolllock';
import debounce from 'lodash.debounce';

export const WindowLock = () => {
  const [isMobileView, setIsMobileView] = useState(true);
  const [isMobileMenu] = useContext(MenuContext);

  const checkInsideMobileView = () => {
    return window.matchMedia('(max-width: 768px)').matches;
  };

  useEffect(() => {
    const onResize = debounce((e) => {
      const isInsideMobileView = checkInsideMobileView();

      setIsMobileView(isInsideMobileView);
    });

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  });

  return <>{isMobileMenu && isMobileView && <ScrollLock />}</>;
};

export default WindowLock;
