import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Label from './Label';
import styles from './Labels.module.scss';

export const Labels = ({ labels, size, centered }) => {
  const labelClasses = classnames(styles.labels, {
    [styles.isLarge]: size === 'lg',
    [styles.isCentered]: centered,
  });

  return (
    <ul className={labelClasses} data-test="labels">
      {labels.map(({ items, type }) =>
        items.map((item, index) => (
          <Label key={index} label={item} type={type} size={size} />
        ))
      )}
    </ul>
  );
};

Labels.propTypes = {
  labels: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      items: PropTypes.array.isRequired,
    })
  ).isRequired,
  size: PropTypes.oneOf(['lg']),
  centered: PropTypes.bool,
};

export default Labels;
