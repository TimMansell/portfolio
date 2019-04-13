import React from 'react';

import Section from '../../layout/section/section';
import {Header} from '../header/header';

import SkillsItem from './skillsItem';

import skills from './skills.json';

export class Skills extends React.Component {
    render() {
        return <Section id="skills" primary>
			<div className="container">
				<Header title="Skills" text="I have acquired many skills during my professional career.  Most notable and relevant are" secondary />

				<div className="skills">
					{skills.map((skill, i) =>
						<SkillsItem skill={skill} key={i} />
					)}
				</div>
				
			</div>
		</Section>;
    }
}

export default Skills;