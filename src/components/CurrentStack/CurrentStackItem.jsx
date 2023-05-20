import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';

import styles from './CurrentStack.module.scss';

export const CurrentStackItem = ({ url, name, width, height }) => {
  const img = name.toLowerCase();

  return (
    <div className={styles.item}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        data-test="stack-item-link"
      >
        <Image
          src={`CurrentStack/img/${img}.svg`}
          alt={name}
          width={width}
          height={height}
        />
      </a>
    </div>
  );
};

CurrentStackItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default CurrentStackItem;
