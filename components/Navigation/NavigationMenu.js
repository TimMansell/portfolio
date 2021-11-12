import React, {useContext} from "react";
import {MenuContext} from "../../context/mobileMenu";
import classnames from "classnames";
import {Link} from "react-scroll";

import useInMobileViewport from "hooks/useInMobileViewport";
import styles from "./NavigationMenu.module.scss";
import navigationJson from "./json/navigation.json";

import {combineWords, upperCaseWords} from "./helpers";

import {useIsFlexGapSupported} from "hooks/useFlexGap";

export const NavigationMenu = () => {
  const hasFlexGap = useIsFlexGapSupported();
  const [isMobileMenu, setIsMobileMenu] = useContext(MenuContext);
  const inViewport = useInMobileViewport();

  const menuClasses = classnames(styles.menu, {
    [styles.menuIsActive]: isMobileMenu && inViewport,
    [styles.flexGap]: hasFlexGap,
  });

  return (
    <ul className={menuClasses} data-e2e="navigation">
      {navigationJson.map((navigation, index) => (
        <li className={styles.menuItem} key={index}>
          <Link
            data-e2e={`navigation-${combineWords(navigation)}`}
            className={styles.link}
            activeClass={styles.linkIsActive}
            to={combineWords(navigation)}
            smooth={true}
            spy={true}
            duration={500}
            onClick={() => setIsMobileMenu(false)}
          >
            {upperCaseWords(navigation)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;
