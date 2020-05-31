import React, { useContext } from 'react';
import { MenuContext } from '../../context/mobileMenu';
import classnames from 'classnames';

import styles from './Hamburger.module.scss';

export const Hamburger = () => {
  const [isMobileMenu, setIsMobileMenu] = useContext(MenuContext);

  const toggleHamburger = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  const buttonClasses = classnames(styles.hamburger, {
    [styles.hamburgerActive]: isMobileMenu,
  });

  const hamburgerClasses = classnames(styles.menu, {
    [styles.menuActive]: isMobileMenu,
  });

  return (
    <button
      type="button"
      data-e2e="hambuger"
      className={buttonClasses}
      onClick={() => toggleHamburger()}
    >
      <span className={hamburgerClasses}>toggle menu</span>
    </button>
  );
};

export default Hamburger;
