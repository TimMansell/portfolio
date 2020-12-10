import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Label.module.scss';

export const Label = ({ type, label }) => {
  const labelClasses = classnames(styles.label, {
    [styles.primary]: type === 'primary',
    [styles.secondary]: type === 'secondary',
  });

  return <div className={labelClasses}>{label}</div>;
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Label;
