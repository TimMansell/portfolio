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
					'OOCSS',
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
					'ES5/ES6',
					'Babel',
					'AngularJS',
					'React/ Redux',
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
					'Git / SVN',
					'Webpack 3'
				],
				icon: 'fa-terminal'
			},
			{
				list: [
					'Agile',
					'Scrum',
					'Kanban',
					'JIRA',
					'Table Tennis'
				],
				icon: 'fa-paper-plane'
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

				<div className="row skills">
					{skills.map((skill, i) =>
						<div className="col-12 col-sm-6 col-md-4 col-lg-2 text--center text--secondary divider" key={i}>
							<SkillsItem skill={skill} />
						</div>
					)}
				</div>

				<p className="text-description text--secondary">I am currently playing around with</p>
				<i className="fa fa-gamepad skills__icon text--secondary"></i>
				<ul className="skills__list text--secondary">
					<li>Angular2</li>
					<li>Various PostCSS modules</li>
				</ul>
			</div>
		</section>;
    }
}