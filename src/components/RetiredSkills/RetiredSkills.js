import React from 'react';

import Header from 'components/Header';
import ListItem from 'components/ListItem';

import skills from './json/retiredSkills.json';

export const RetiredSkills = () => {
	return <>
		<Header title="Retired Skills" text="I am still highly skilled in this area, but I have since moved onto newer tech" tertiary />

		<div className="skills">
			{skills.map((skill, i) =>
				<ListItem item={skill} key={i} />
			)}
		</div>
	</>;
}

export default RetiredSkills;