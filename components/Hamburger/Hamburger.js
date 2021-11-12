import React, {useContext, useState} from "react";
import {MenuContext} from "../../context/mobileMenu";
import classnames from "classnames";

import styles from "./Hamburger.module.scss";

export const Hamburger = () => {
  const [isMobileMenu, setIsMobileMenu] = useContext(MenuContext);
  const [isClicked, setIsClicked] = useState(false);

  const toggleHamburger = () => {
    setIsMobileMenu(!isMobileMenu);
    setIsClicked(true);
  };

  const buttonClasses = classnames(styles.hamburger, {
    [styles.hamburgerIsActive]: isMobileMenu,
  });

  const hamburgerClasses = classnames(styles.menu, {
    [styles.menuIsActive]: isMobileMenu,
  });

  const backgroundClasses = classnames(styles.background, {
    [styles.backgroundIsOpen]: isMobileMenu,
    [styles.backgroundIsClosed]: !isMobileMenu && isClicked,
  });

  return (
    <div className={styles.container}>
      <button
        type="button"
        data-e2e="hambuger"
        className={buttonClasses}
        onClick={() => toggleHamburger()}
      >
        <span className={hamburgerClasses}>toggle menu</span>
      </button>
      <div className={backgroundClasses}></div>
    </div>
  );
};

export default Hamburger;
