import React from 'react';

import InViewport from '../inViewport/inViewport';
import {ShuffleCharacters} from '../shuffleCharacters/shuffleCharacters';

import SkillsItem from './skillsItem';

import skills from './skills.json';
import learning from './learning.json';

export class Skills extends React.Component {
    render() {
        return <section id="skills" className="layout-section bg--primary text--center">
			<div className="container">

				<div className="heading text--secondary">
					<InViewport>
						<ShuffleCharacters>
							<h2 className="heading__title text--center">Skills</h2>
						</ShuffleCharacters>
					</InViewport>
					<p className="heading__description">I have acquired many skills during my professional career.  Most notable and relevant are</p>
				</div>


				<div className="skills">
					{skills.map((skill, i) =>
						<div className="text--center text--secondary divider" key={i}>
							<SkillsItem skill={skill} />
						</div>
					)}
				</div>

				<p className="text-description text--secondary">I am currently playing around with</p>
				<div className="skills">
					{learning.map((skill, i) =>
						<div className="skills--single text--center text--secondary" key={i}>
							<SkillsItem skill={skill} />
						</div>
					)}
				</div>
			</div>
		</section>;
    }
}