import Header from 'components/Header';
import ListItems from 'components/ListItems';

import skills from './json/skills.json';

export const Skills = () => {
  return (
    <>
      <Header
        title="Skills"
        text="I have acquired many skills during my professional career.  Most notable and relevant are"
        type="secondary"
      />

      <ListItems items={skills} />
    </>
  );
};

export default Skills;
