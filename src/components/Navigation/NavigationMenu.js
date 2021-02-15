import React, { useContext } from 'react';
import { MenuContext } from '../../context/mobileMenu';
import classnames from 'classnames';
import { Link } from 'react-scroll';

import styles from './Navigation.module.scss';

export const NavigationMenu = () => {
  const [isMobileMenu, setIsMobileMenu] = useContext(MenuContext);

  const closeMenu = () => {
    setIsMobileMenu(false);
  };

  const menuClasses = classnames(styles.menu, {
    [styles.menuActive]: isMobileMenu,
  });

  return (
    <ul className={menuClasses}>
      <li className={styles.item}>
        <Link
          data-e2e="navigation-profile"
          className={styles.link}
          activeClass={styles.linkActive}
          to="profile"
          smooth={true}
          spy={true}
          duration={500}
          onClick={() => closeMenu()}
        >
          Profile
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          data-e2e="navigation-skills"
          className={styles.link}
          activeClass={styles.linkActive}
          to="skills"
          smooth={true}
          spy={true}
          duration={500}
          onClick={() => closeMenu()}
        >
          Skills
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          data-e2e="navigation-retired-skills"
          className={styles.link}
          activeClass={styles.linkActive}
          to="retired-skills"
          smooth={true}
          spy={true}
          duration={500}
          onClick={() => closeMenu()}
        >
          Retired Skills
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          data-e2e="navigation-stack"
          className={styles.link}
          activeClass={styles.linkActive}
          to="stack"
          smooth={true}
          spy={true}
          duration={500}
          onClick={() => closeMenu()}
        >
          Stack
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          data-e2e="navigation-portfolio"
          className={styles.link}
          activeClass={styles.linkActive}
          to="portfolio"
          smooth={true}
          spy={true}
          duration={500}
          onClick={() => closeMenu()}
        >
          Portfolio
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          data-e2e="navigation-testimonials"
          className={styles.link}
          activeClass={styles.linkActive}
          to="testimonials"
          smooth={true}
          spy={true}
          duration={500}
          onClick={() => closeMenu()}
        >
          Testimonials
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          data-e2e="navigation-contact"
          className={styles.link}
          activeClass={styles.linkActive}
          to="contact"
          smooth={true}
          spy={true}
          duration={500}
          onClick={() => closeMenu()}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavigationMenu;
