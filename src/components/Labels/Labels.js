import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Label from './Label';
import styles from './Labels.module.scss';

import { useIsFlexGapSupported } from 'hooks/useFlexGap';

export const Labels = ({ labels, size, centered }) => {
  const hasFlexGap = useIsFlexGapSupported();

  const labelClasses = classnames(styles.labels, {
    [styles.isLarge]: size === 'lg',
    [styles.isCentered]: centered,
    [styles.flexGap]: hasFlexGap,
  });

  return (
    <ul className={labelClasses} data-testid="labels">
      {labels.map(({ items, type }) =>
        items.map((item, index) => (
          <Label
            key={index}
            label={item}
            type={type}
            size={size}
            data-testid="labels-item"
          />
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
