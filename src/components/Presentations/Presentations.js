import React from 'react';

import Header from 'components/Header';
import ListItems from 'components/ListItems';

import presentations from './json/presentations.json';

export const Presentations = () => {
  return (
    <>
      <Header title="Presentations" text="Some talks I have done" tertiary />

      <ListItems items={presentations} />
    </>
  );
};

export default Presentations;
