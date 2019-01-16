import React from 'react';

import InViewport from '../inViewport/inViewport';
import {ShuffleCharacters} from '../shuffleCharacters/shuffleCharacters';

import SkillsItem from './skillsItem';

import stack from './stack.json';
// import learning from './learning.json';

export class CurrentStack extends React.Component {
    render() {
        return <section id="stack" className="layout-section bg--primary text--center">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="heading text--secondary">
							<InViewport>
								<ShuffleCharacters>
									<h2 className="heading__title text--center">Current Stack</h2>
								</ShuffleCharacters>
							</InViewport>
							<p className="heading__description">I spend most of my time with these technologies / tools / methodologies</p>
						</div>
					</div>
				</div>

				<div className="row skills">
					{stack.map((skill, i) =>
						<div className="col-12 col-sm-6 col-md-4 col-lg-2 text--center text--secondary divider" key={i}>
							<SkillsItem skill={skill} />
						</div>
					)}
				</div>
			</div>
		</section>;
    }
}