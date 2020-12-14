import React from 'react';
import PropTypes from 'prop-types';

import SvgImage from '../SvgImage';

import styles from './CurrentStack.module.scss';

export const StackItem = ({ url, img, name, width }) => {
  const src = require(`./img/${img}`);

  return (
    <div className={styles.item}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        data-test="stack-item-link"
      >
        <SvgImage src={src} name={name} width={width} />
      </a>
    </div>
  );
};

StackItem.propTypes = {
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default StackItem;
