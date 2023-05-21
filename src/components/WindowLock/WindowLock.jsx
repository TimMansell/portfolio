import { useContext } from 'react';
import { MenuContext } from '../../context/mobileMenu';
import ScrollLock from 'react-scrolllock';

import useInMobileViewport from 'hooks/useInMobileViewport';

export const WindowLock = () => {
  const [isMobileMenu] = useContext(MenuContext);
  const inViewport = useInMobileViewport();

  return <>{isMobileMenu && inViewport && <ScrollLock />}</>;
};

export default WindowLock;
