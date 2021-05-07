import React from 'react';
import classnames from 'classnames';

import CurrentStackItem from './CurrentStackItem';

import styles from './CurrentStack.module.scss';

import stackItems from './json/stack.json';

import { useIsFlexGapSupported } from 'hooks/useFlexGap';

export const CurrentStackItems = () => {
  const hasFlexGap = useIsFlexGapSupported();

  const stackClasses = classnames(styles.stack, {
    [styles.flexGap]: hasFlexGap,
  });

  return (
    <div className={stackClasses} data-test="stack-items">
      {stackItems.map((stack, i) => (
        <CurrentStackItem {...stack} key={i} />
      ))}
    </div>
  );
};

export default CurrentStackItems;
