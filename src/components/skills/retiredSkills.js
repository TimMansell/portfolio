import React from 'react';

import {Header} from '../header/header';

import SkillsItem from './skillsItem';

import skills from './retiredSkills.json';

export class RetiredSkills extends React.Component {
    render() {
        return <>
				<Header title="Retired Skills" text="I am still highly skilled in this area, but I have since moved onto newer tech" tertiary />

				<div className="skills">
					{skills.map((skill, i) =>
						<SkillsItem skill={skill} key={i} />
					)}
				</div>
			</>;
    }
}

export default RetiredSkills;