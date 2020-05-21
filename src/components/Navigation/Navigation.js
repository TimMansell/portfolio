import React, { useState, useEffect, useRef, useContext } from 'react';
import { MenuContext } from '../../context/mobileMenu';
import classnames from 'classnames';
import { Link } from 'react-scroll';

import Hamburger from 'components/Hamburger';

import './Navigation.scss';

export const Navigation = () => {
  const [isFixedNav, setIsFixedNav] = useState(false);
  const refNavigation = useRef(null);
  const [isMobileMenu, setIsMobileMenu] = useContext(MenuContext);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const { clientHeight } = refNavigation.current;

      setIsFixedNav(scrollTop >= window.innerHeight - clientHeight);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  });

  const closeMenu = () => {
    setIsMobileMenu(false);
  };

  const navClasses = classnames('navigation', {
    'navigation--is-sticky': isFixedNav && !isMobileMenu,
    'navigation--active': isMobileMenu,
  });

  const menuClasses = classnames('navigation__menu', {
    'navigation__menu--active': isMobileMenu,
  });

  const linkClasses = classnames('navigation__menu-link', {
    'navigation__menu-link--is-sticky': isFixedNav && !isMobileMenu,
  });

  return (
    <nav
      id="nav"
      data-e2e="navigation"
      className={navClasses}
      ref={refNavigation}
      role="navigation"
    >
      <ul className={menuClasses}>
        <li className="navigation__menu-item">
          <Link
            data-e2e="navigation-profile"
            className={linkClasses}
            activeClass="navigation__menu-link--active"
            to="profile"
            smooth={true}
            spy={true}
            duration={500}
            onClick={() => closeMenu()}
          >
            Profile
          </Link>
        </li>
        <li className="navigation__menu-item">
          <Link
            data-e2e="navigation-skills"
            className={linkClasses}
            activeClass="navigation__menu-link--active"
            to="skills"
            smooth={true}
            spy={true}
            duration={500}
            onClick={() => closeMenu()}
          >
            Skills
          </Link>
        </li>
        <li className="navigation__menu-item">
          <Link
            data-e2e="navigation-retired-skills"
            className={linkClasses}
            activeClass="navigation__menu-link--active"
            to="retired-skills"
            smooth={true}
            spy={true}
            duration={500}
            onClick={() => closeMenu()}
          >
            Retired Skills
          </Link>
        </li>
        <li className="navigation__menu-item">
          <Link
            data-e2e="navigation-stack"
            className={linkClasses}
            activeClass="navigation__menu-link--active"
            to="stack"
            smooth={true}
            spy={true}
            duration={500}
            onClick={() => closeMenu()}
          >
            Stack
          </Link>
        </li>
        <li className="navigation__menu-item">
          <Link
            data-e2e="navigation-portfolio"
            className={linkClasses}
            activeClass="navigation__menu-link--active"
            to="portfolio"
            smooth={true}
            spy={true}
            duration={500}
            onClick={() => closeMenu()}
          >
            Portfolio
          </Link>
        </li>
        <li className="navigation__menu-item">
          <Link
            data-e2e="navigation-presentations"
            className={linkClasses}
            activeClass="navigation__menu-link--active"
            to="presentations"
            smooth={true}
            spy={true}
            duration={500}
            onClick={() => closeMenu()}
          >
            Presentations
          </Link>
        </li>
        <li className="navigation__menu-item">
          <Link
            data-e2e="navigation-testimonials"
            className={linkClasses}
            activeClass="navigation__menu-link--active"
            to="testimonials"
            smooth={true}
            spy={true}
            duration={500}
            onClick={() => closeMenu()}
          >
            Testimonials
          </Link>
        </li>
        <li className="navigation__menu-item">
          <Link
            data-e2e="navigation-contact"
            className={linkClasses}
            activeClass="navigation__menu-link--active"
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

      <Hamburger />
    </nav>
  );
};

export default Navigation;
