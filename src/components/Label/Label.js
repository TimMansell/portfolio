import React from 'react';
import PropTypes from 'prop-types';

import styles from './Label.module.scss';

export const Label = ({ label }) => {
  return <div className={styles.label}>{label}</div>;
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Label;
