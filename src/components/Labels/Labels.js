import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Label from './Label';
import styles from './Labels.module.scss';

export const Labels = ({ items, type, size, centered }) => {
  const labelClasses = classnames(styles.labels, {
    [styles.labelsLg]: size === 'lg',
    [styles.centered]: centered,
  });

  return (
    <div className={labelClasses}>
      {items.map((item, index) => (
        <Label key={index} label={item} type={type} size={size} />
      ))}
    </div>
  );
};

Labels.propTypes = {
  items: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
  centered: PropTypes.bool,
};

export default Labels;
