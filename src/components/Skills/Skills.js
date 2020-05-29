import React from 'react';

import Header from 'components/Header';
import ListItem from 'components/ListItem';

import skills from './json/skills.json';
import styles from './Skills.module.scss';

export const Skills = () => {
  return (
    <>
      <Header
        title="Skills"
        text="I have acquired many skills during my professional career.  Most notable and relevant are"
        secondary
      />

      <div className={styles.skills}>
        {skills.map((skill, i) => (
          <ListItem item={skill} key={i} />
        ))}
      </div>
    </>
  );
};

export default Skills;
