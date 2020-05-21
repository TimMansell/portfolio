import React, { useContext } from 'react';
import { MenuContext } from '../../context/mobileMenu';
import classnames from 'classnames';

import './Hamburger.scss';

export const Hamburger = () => {
  const [isMobileMenu, setIsMobileMenu] = useContext(MenuContext);

  const toggleHamburger = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  const buttonClasses = classnames('hamburger', {
    'hamburger--active': isMobileMenu,
  });

  const hamburgerClasses = classnames('hamburger__menu', {
    'hamburger__menu--active': isMobileMenu,
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
