import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import throttle from 'lodash.throttle';
import classnames from 'classnames';

import './GoToTop.scss';

import { IconAngleUp } from 'components/Icon';

export const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const classes = classnames('goto-top', { 'goto-top--show': isVisible });

  useEffect(() => {
    const onScroll = throttle(() => {
      setIsVisible(window.scrollY >= 800);
    }, 30);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [isVisible]);

  return (
    <Link data-e2e="goto-top-btn" className={classes} to="root" smooth={true}>
      <IconAngleUp size="sm" />
    </Link>
  );
};

export default GoToTop;
