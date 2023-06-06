import React from 'react';

import CurrentStackItem from './CurrentStackItem';

import styles from './CurrentStack.module.scss';

import stackItems from './json/stack.json';

export const CurrentStackItems = () => {
  return (
    <div className={styles.stack} data-test="stack-items">
      {stackItems.map((stack, i) => (
        <CurrentStackItem {...stack} key={i} />
      ))}
    </div>
  );
};

export default CurrentStackItems;
