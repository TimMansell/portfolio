import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';

import styles from './CurrentStack.module.scss';

export const CurrentStackItem = ({ url, name, imgWidth }) => {
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
          width={imgWidth}
        />
      </a>
    </div>
  );
};

CurrentStackItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgWidth: PropTypes.string.isRequired,
};

export default CurrentStackItem;
