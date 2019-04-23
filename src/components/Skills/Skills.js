import React from 'react';

import Header from '../Header';
import ListItem from '../ListItem';

import skills from './json/skills.json';

export const Skills = () => {
	return <>
		<Header title="Skills" text="I have acquired many skills during my professional career.  Most notable and relevant are" secondary />

		<div className="skills">
			{skills.map((skill, i) =>
				<ListItem item={skill} key={i} />
			)}
		</div>
	</>;
}

export default Skills;