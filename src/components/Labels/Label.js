import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Label.module.scss';

export const Label = ({ label, type, size }) => {
  const labelClasses = classnames(styles.label, {
    [styles.primary]: type === 'primary',
    [styles.secondary]: type === 'secondary',
    [styles.tertiary]: type === 'tertiary',
    [styles.lg]: size === 'lg',
  });

  return <div className={labelClasses}>{label}</div>;
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Label;
