import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Label.module.scss';

export const Label = ({ label, type, size }) => {
  const labelClasses = classnames(styles.label, {
    [styles.isPrimary]: type === 'primary',
    [styles.isSecondary]: type === 'secondary',
    [styles.isTertiary]: type === 'tertiary',
    [styles.isLarge]: size === 'lg',
  });

  return <li className={labelClasses}>{label}</li>;
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['lg']),
};

export default Label;
