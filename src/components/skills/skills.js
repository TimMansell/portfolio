import React from 'react';

import InViewport from '../inViewport/inViewport';
import {ShuffleCharacters} from '../shuffleCharacters/shuffleCharacters';

import SkillsItem from './skillsItem';

export class Skills extends React.Component {
    render() {
		const skills = [
			{
				list: [
					'Semantic HTML5',
					'Bootstrap 3/4',
					'SEO',
					'Accessibility',
					'Web Components'
				],
				icon: 'fa-html5'
			},
			{
				list: [
					'CSS3',
					'SCSS / LESS',
					'BEM',
					'OOCSS / SMACSS',
					'PostCSS',
					'Atomic Design'
				],
				icon: 'fa-css3'
			},
			{
				list: [
					'Responsive',
					'Mobile First',
					'Performance',
					'Optimisation'
				],
				icon: 'fa-mobile'
			},
			{
				list: [
					'ES5 / ES6',
					'Babel',
					'AngularJS',
					'React / Redux',
					'Backbone.js',
					'JSON',
					'jQuery'
				],
				icon: 'fa-code'
			},
			{
				list: [
					'Node.js',
					'NPM / Yarn',
					'Gulp / Grunt',
					'Git / GitFlow / SVN',
					'Webpack 3'
				],
				icon: 'fa-terminal'
			},
			{
				list: [
					'Agile',
					'Scrum',
					'Kanban',
					'JIRA / VSTS',
					'Table Tennis'
				],
				icon: 'fa-paper-plane'
			}
		];

		const learning = [
			{
				list: [
					'WebVR / ReactVR',
					'Functional Programming',
					'CSS Grid'
				],
				icon: 'fa-gamepad'
			}
		];

        return <section id="skills" className="layout-section bg--primary text--center">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="heading text--secondary">
							<InViewport>
								<ShuffleCharacters>
									<h2 className="heading__title text--center">Skills</h2>
								</ShuffleCharacters>
							</InViewport>
							<p className="heading__description">I spend most of my time with these technologies / tools / methodologies</p>
						</div>
					</div>
				</div>

				<div className="skills">
					{skills.map((skill, i) =>
						<div className="skills__item text--center text--secondary divider" key={i}>
							<SkillsItem skill={skill} />
						</div>
					)}
				</div>

				<p className="text-description text--secondary">I am currently playing around with</p>
				<div className="skills">
					{learning.map((skill, i) =>
						<div className="skills__item--single text--center text--secondary" key={i}>
							<SkillsItem skill={skill} />
						</div>
					)}
				</div>
			</div>
		</section>;
    }
}