import React, { useContext } from 'react';
import { MenuContext } from '../../context/mobileMenu';
import classnames from 'classnames';
import { Link } from 'react-scroll';

import styles from './NavigationMenu.module.scss';
import navigationJson from './json/navigation.json';

export const combineWords = (words) => words.replaceAll(' ', '-');

export const splitWords = (words) => words.split(' ');

export const upperCaseWord = ([initial, ...rest]) =>
  [initial.toUpperCase(), ...rest].join('');

export const navigationName = (name) => {
  const words = splitWords(name);

  return words.map((word) => upperCaseWord(word)).join(' ');
};

export const NavigationMenu = () => {
  const [isMobileMenu, setIsMobileMenu] = useContext(MenuContext);

  const menuClasses = classnames(styles.menu, {
    [styles.menuIsActive]: isMobileMenu,
  });

  const closeMenu = () => setIsMobileMenu(false);

  return (
    <ul className={menuClasses}>
      {navigationJson.map((navigation, index) => (
        <li className={styles.item} key={index}>
          <Link
            data-e2e={`navigation-${combineWords(navigation)}`}
            className={styles.link}
            activeClass={styles.linkIsActive}
            to={combineWords(navigation)}
            smooth={true}
            spy={true}
            duration={500}
            onClick={() => closeMenu()}
          >
            {navigationName(navigation)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;
