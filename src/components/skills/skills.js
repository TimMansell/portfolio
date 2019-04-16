import React from 'react';

import {Header} from '../header/header';

import SkillsItem from './skillsItem';

import skills from './skills.json';

export class Skills extends React.Component {
    render() {
        return <>
			<Header title="Skills" text="I have acquired many skills during my professional career.  Most notable and relevant are" secondary />

			<div className="skills">
				{skills.map((skill, i) =>
					<SkillsItem skill={skill} key={i} />
				)}
			</div>
		</>;
    }
}

export default Skills;