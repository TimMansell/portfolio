import React from 'react';

import Header from 'components/Header';
import StackItem from './StackItem';

import styles from './CurrentStack.module.scss';
import stackItems from './json/stack.json';

export const CurrentStack = () => {
  return (
    <>
      <Header
        title="Current Stack"
        text="I spend most of my time with these technologies / tools / methodologies"
        primary
      />

      <div className={styles.stack} data-test="stack-items">
        {stackItems.map((stack, i) => (
          <StackItem {...stack} key={i} />
        ))}
      </div>
    </>
  );
};

export default CurrentStack;
