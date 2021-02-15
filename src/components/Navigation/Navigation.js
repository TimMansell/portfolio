import React, { useState, useEffect, useRef, useContext } from 'react';
import { MenuContext } from '../../context/mobileMenu';
import classnames from 'classnames';

import NavigationMenu from './NavigationMenu';
import Hamburger from 'components/Hamburger';

import styles from './Navigation.module.scss';

export const Navigation = () => {
  const [isFixedNav, setIsFixedNav] = useState(false);
  const refNavigation = useRef(null);
  const [isMobileMenu] = useContext(MenuContext);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const { clientHeight } = refNavigation.current;

      setIsFixedNav(scrollTop >= window.innerHeight - clientHeight);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  });

  const navClasses = classnames(styles.navigation, {
    [styles.navigationSticky]: isFixedNav && !isMobileMenu,
    [styles.navigationActive]: isMobileMenu,
  });

  return (
    <nav
      id="nav"
      data-e2e="navigation"
      className={navClasses}
      ref={refNavigation}
      role="navigation"
    >
      <NavigationMenu />

      <Hamburger />
    </nav>
  );
};

export default Navigation;
