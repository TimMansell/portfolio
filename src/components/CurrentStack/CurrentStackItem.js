import React from 'react';
import PropTypes from 'prop-types';

import Picture from '../Picture';

import styles from './CurrentStack.module.scss';

export const CurrentStackItem = ({ url, img, name, width }) => {
  return (
    <div className={styles.item}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        data-test="stack-item-link"
      >
        <Picture
          image={{
            name: img,
            title: name,
          }}
          types={['svg']}
          src="CurrentStack/img"
          srcSizes={['1366', '1600', '1920', '2560']}
          width={width}
          isLazy
        />
      </a>
    </div>
  );
};

CurrentStackItem.propTypes = {
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default CurrentStackItem;
