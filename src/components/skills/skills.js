import React from 'react';

import {Header} from '../header/header';

import SkillsItem from './skillsItem';

import skills from './skills.json';
import learning from './learning.json';

export class Skills extends React.Component {
    render() {
        return <section id="skills" className="layout-section bg--primary">
			<div className="container">
				<Header title="Skills" text="I have acquired many skills during my professional career.  Most notable and relevant are" secondary />

				<div className="skills">
					{skills.map((skill, i) =>
						<SkillsItem skill={skill} key={i} />
					)}
				</div>

				<p className="text-description text--secondary text--center">I am currently playing around with</p>
				
				<div className="skills skills--single">
					{learning.map((skill, i) =>
						<SkillsItem skill={skill} key={i} />
					)}
				</div>
			</div>
		</section>;
    }
}