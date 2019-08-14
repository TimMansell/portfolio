import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import InViewport from 'components/InViewport';
import ShuffleCharacters from 'components/ShuffleCharacters';

import './Header.scss';

export const Header = ({primary, secondary, tertiary, text, title}) => {
  const classes = classnames('heading ', {
    'heading--primary': primary,
    'heading--secondary': secondary,
    'heading--tertiary': tertiary
  });

  if (text) {
    text = <p data-test="heading-description">{text}</p>;
  }

  return <div className={classes}>
    <InViewport>
      <ShuffleCharacters>
        <h2 className="heading__title" data-test="heading-title">{title}</h2>
      </ShuffleCharacters>
    </InViewport>
    {text}
  </div>;
};

Header.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  text: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default Header;
