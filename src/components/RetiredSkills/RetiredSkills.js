import React from 'react';

import Header from 'components/Header';
import ListItems from 'components/ListItems';

import skills from './json/retiredSkills.json';

export const RetiredSkills = () => {
  return (
    <>
      <Header
        title="Older Skills"
        text="I am still highly skilled in this area, but have since moved onto newer tech"
        type="tertiary"
      />

      <ListItems items={skills} />
    </>
  );
};

export default RetiredSkills;
