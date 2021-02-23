import React from 'react';

import Header from 'components/Header';
import CurrentStackItems from './CurrentStackItems';

export const CurrentStack = () => {
  return (
    <>
      <Header
        title="Current Stack"
        text="I spend most of my time with these technologies / tools / methodologies"
        primary
      />

      <CurrentStackItems />
    </>
  );
};

export default CurrentStack;
