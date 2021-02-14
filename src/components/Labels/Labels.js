import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Label from './Label';
import styles from './Labels.module.scss';

export const Labels = ({ items, type, size }) => {
  const labelClasses = classnames(styles.labels, {
    [styles.labelsLg]: size === 'lg',
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
};

export default Labels;
